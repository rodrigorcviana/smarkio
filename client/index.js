function refereshPanel() {
  const http = new XMLHttpRequest();

  http.open("GET", 'http://localhost:3030/index');
  http.send();
  
  http.onreadystatechange = (e) => {
    if (http.readyState == 4 && http.status == 200) {
      let messages = JSON.parse(http.responseText);
      
      let ul = document.getElementById('message-list');
      ul.innerHTML = "";

      messages.slice().reverse().forEach((message) => {
        // console.log(message);
        // structure
        let li = document.createElement("li");
        let mainDiv = document.createElement("div");
        mainDiv.className = "list-div";
        let div1 = document.createElement("div");
        div1.className = "div1";
        let div2 = document.createElement("div");
        div2.className = "div2";

        // buttons
        let listenButton = document.createElement("button");
        listenButton.className = "listen-button";
        let deleteButton = document.createElement("button");
        let i = document.createElement("i");
        i.className = "fa fa-trash"

        // Text
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(message.message));

        listenButton.appendChild(document.createTextNode('ouvir'));
        listenButton.onclick = () => playAudio(message.id);
        deleteButton.appendChild(i);
        deleteButton.onclick = () => deleteMessage(message.id);
      
        // attrib
        div2.appendChild(listenButton);
        div2.appendChild(deleteButton);
        div1.appendChild(p);
        mainDiv.appendChild(div1);
        mainDiv.appendChild(div2);
        li.appendChild(mainDiv);
        ul.appendChild(li);        
      });
    } 
  }
}

function deleteMessage(messageId) {
  const http = new XMLHttpRequest();

  http.open("DELETE", 'http://localhost:3030/delete/' + messageId, true);
  http.setRequestHeader("Content-type", "application/json");

  http.send();
  
  http.onreadystatechange = (e) => {
    if (http.readyState == 4 && http.status == 200) {
      refereshPanel();
    } 
  }
}

function sendData() {
  const http = new XMLHttpRequest();

  let message = document.getElementById("message").value;

  http.open("POST", 'http://localhost:3030/create', true);
  http.setRequestHeader("Content-type", "application/json");
  
  const payload = { message };

  http.send(JSON.stringify(payload));
  
  http.onreadystatechange = (e) => {
    if (http.readyState == 4 && http.status == 200) {
      refereshPanel();
    } 
    if (http.readyState == 4 && http.status == 404) {
      window.alert('mensagem vazia!');
    }
  }
}

function playAudio(messageId) {
  const http = new XMLHttpRequest();
  let audioCtx = new AudioContext();
  let analyser = audioCtx.createAnalyser();
  let source = audioCtx.createBufferSource();

  http.open("GET", 'http://localhost:3030/audio/' + messageId, true);
  http.setRequestHeader("Content-type", "audio/wav");
  http.responseType = "arraybuffer";

  http.send();
  
  http.onreadystatechange = (e) => {
    if (http.readyState == 4 && http.status == 200) {
      console.log(http.responseType);
    }
    if (http.readyState == 4 && http.status == 404) {
      console.log('audio não encontrado!');
    } 
  }

  http.onload = () => {
    audioCtx.decodeAudioData(http.response, (buffer) => {
      source.buffer = buffer;
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
      source.loop = false;
      source.start(0);
    })
  }
}

refereshPanel();