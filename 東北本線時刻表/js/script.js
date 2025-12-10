const timetableData = {
    nobori: [
      { time: "5:29", destination: "仙台",zikan:"5:57" },
      { time: "6:05", destination: "仙台",zikan:"6:32" },
      { time: "6:38", destination: "仙台" ,zikan:"7:04"},

      { time: "7:04", destination: "仙台",zikan:"7:31" },
      { time: "7:20", destination: "仙台",zikan:"7:48" },
      { time: "7:30", destination: "仙台",zikan:"7:58" },
      { time: "7:55", destination: "仙台",zikan:"8:22" },

      { time: "8:07", destination: "仙台",zikan:"8:35"},
      { time: "8:19", destination: "仙台",zikan:"8:50"},

      { time: "9:10", destination: "仙台",zikan:"9:36"},
      { time: "9:29", destination: "仙台",zikan:"9:56"},

      { time: "10:14", destination: "仙台",zikan:"10:42" },
    
      { time: "11:04", destination: "仙台",zikan:"11:30" },
      { time: "11:49", destination: "仙台",zikan:"12:15" },


      { time: "12:08", destination: "仙台",zikan:"12:34" },

      { time: "13:04", destination: "仙台",zikan:"13:30" },
      { time: "13:30", destination: "仙台",zikan:"13:56" },
      { time: "13:56", destination: "仙台",zikan:"14:23" },

      { time: "14:46", destination: "仙台",zikan:"15:14" },

      { time: "15:04", destination: "仙台",zikan:"15:30" },
      { time: "15:53", destination: "仙台",zikan:"16:19" },

      { time: "16:09", destination: "仙台",zikan:"16:36" },
      { time: "16:47", destination: "仙台",zikan:"17:13" },

      { time: "17:09", destination: "仙台",zikan:"17:36" },
      { time: "17:37", destination: "仙台",zikan:"18:02" },
      { time: "17:51", destination: "仙台",zikan:"18:18" },

      { time: "18:16", destination: "仙台",zikan:"18:42" },
      { time: "18:43", destination: "仙台",zikan:"19:09" },
      { time: "18:54", destination: "仙台",zikan:"19:21" },

      { time: "19:14", destination: "仙台",zikan:"19:40" },
      { time: "19:38", destination: "仙台",zikan:"20:04" },

      { time: "20:10", destination: "仙台",zikan:"20:37" },
      { time: "20:35", destination: "仙台",zikan:"21:01" },

      { time: "21:30", destination: "仙台",zikan:"21:56" },

      { time: "22:26", destination: "仙台",zikan:"22:51"},
    ],
    kudari: [
      { time: "6:24", destination: "小牛田",zikan:"6:44" },
      { time: "7:08", destination: "小牛田",zikan:"7:29" },
      { time: "7:33", destination: "小牛田" ,zikan:"7:53"}
    ]
  };
  
  const stationSelect = document.getElementById("station-select");
  const tbody = document.querySelector("#timetable tbody");
  const currentTimeDisplay = document.getElementById("current-time");

  function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
 }
  
 function updateCurrentTime() {
  const now = new Date();
  const timeString = `${String(now.getHours()).padStart(2, "0")}:${String(
    now.getMinutes()
  ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

  currentTimeDisplay.textContent = `現在時刻：${timeString}`;
}

function toMinutes(timeStr) {
  const [h, m] = timeStr.split(":").map(Number);
  return h * 60 + m;
}

  function highlightNextTrain() {
  const rows = tbody.querySelectorAll("tr");
  const now = getCurrentTime();
  const nowMinutes = toMinutes(now);
  let found = false;

  rows.forEach((row) => {
    const depTime = row.children[0].textContent; // 出発時刻
    const depMinutes = toMinutes(depTime);
    if (!found &&  depMinutes > nowMinutes) {
      row.style.background = "gold"; // 次の電車をハイライト
      found = true;
    } else {
      row.style.background = "white"; // 通常の行
    }
  });
}

  function displayTimetable(station) {
    tbody.innerHTML = ""; // 既存のデータをクリア
  
    timetableData[station].forEach(entry => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${entry.time}</td><td>${entry.destination}</td><td>${entry.zikan}</td>`;
      tbody.appendChild(row);
    });
  }
  
  // 初期表示
  displayTimetable(stationSelect.value);
  updateCurrentTime();
  highlightNextTrain();
  
  // 駅選択が変わったら時刻表を更新
  stationSelect.addEventListener("change", () => {
    displayTimetable(stationSelect.value);
  });

   setInterval(() => {
  updateCurrentTime();
  highlightNextTrain();
}, 1000);

  


