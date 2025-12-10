const timetableData = {
   nobori: [
      {time:"高城町発",zikan:"中野栄",zikan1:"福田町",zikan2:"仙台",zikan3:"青葉通り",zikan4:"備考"},
      
      // <tr><th>出発時刻</th><th>行き先</th><th>中野栄</th><th>福田町</th><th></th><th>青葉通り</th></tr>
      { time: "6:03",zikan:"6:26",zikan1:"6:32",zikan2:"6:45",zikan3:"06:47",zikan4:"なし"},
      { time: "6:21",zikan:"6:44",zikan1:"6:49",zikan2:"7:04",zikan3:"07:05"},
      { time: "6:38",zikan:"7:02",zikan1:"7:07",zikan2:"7:21",zikan3:"07:23" },

      { time: "7:15",zikan:"7:38",zikan1:"7:43",zikan2:"7:57",zikan3:"07:59" },
      { time: "7:31",zikan:"7:57",zikan1:"8:02",zikan2:"8:16",zikan3:"08:17" },
      { time: "7:52",zikan:"8:17",zikan1:"8:23",zikan2:"8:37",zikan3:"08:38" },

      { time: "8:10",zikan:"8:35",zikan1:"8:40",zikan2:"8:55",zikan3:"08:56" },

      { time: "9:17",zikan:"9:40",zikan1:"9:46",zikan2:"9:59",zikan3:"10:00" },
      { time: "9:49",zikan:"10:12",zikan1:"10:17",zikan2:"10:31",zikan3:"10:32" },

      { time: "10:17",zikan:"10:40",zikan1:"10:45",zikan2:"10:59",zikan3:"11:00" },
      { time: "10:48",zikan:"11:11",zikan1:"11:17",zikan2:"11:30",zikan3:"11:32" },

      { time: "11:28",zikan:"11:51",zikan1:"11:56",zikan2:"12:09",zikan3:"12:11" },

      { time: "12:08",zikan:"12:31",zikan1:"12:36",zikan2:"12:49",zikan3:"12:51" },
      { time: "12:29",zikan:"12:52",zikan1:"12:57",zikan2:"13:11",zikan3:"13:12"},
      { time: "12:50",zikan:"13:13",zikan1:"13:18",zikan2:"13:31",zikan3:"13:32" },

      { time: "13:28",zikan:"13:52",zikan1:"13:57",zikan2:"14:10",zikan3:"14:12" },
      { time: "13:48",zikan:"14:11",zikan1:"14:16",zikan2:"14:29",zikan3:"14:30" },

      { time: "14:29",zikan:"14:52",zikan1:"14:57",zikan2:"15:10",zikan3:"15:12"},
      { time: "14:48",zikan:"15:11",zikan1:"15:16",zikan2:"15:29",zikan3:"15:30" },

      { time: "15:04",zikan:"15:30",zikan1:"15:35",zikan2:"15:49",zikan3:"15:50" },
      { time: "15:46",zikan:"16:09",zikan1:"16:14",zikan2:"16:28",zikan3:"16:29" },

      { time: "16:09",zikan:"16:33",zikan1:"16:38",zikan2:"16:51",zikan3:"16:53" },
      { time: "16:41",zikan:"17:04",zikan1:"17:09",zikan2:"17:23",zikan3:"17:24" },

      { time: "17:09",zikan:"17:32",zikan1:"17:37",zikan2:"17:52",zikan3:"17:53" },
      { time: "17:42",zikan:"18:05",zikan1:"18:10",zikan2:"18:24",zikan3:"18:25" },

      { time: "18:08",zikan:"18:32",zikan1:"18:37",zikan2:"18:51",zikan3:"18:52" },
      { time: "18:37",zikan:"19:00",zikan1:"19:05",zikan2:"19:19",zikan3:"19:20" },

      { time: "19:08",zikan:"19:32",zikan1:"19:37",zikan2:"19:51",zikan3:"19:52" },
      { time: "19:44",zikan:"20:07",zikan1:"20:12",zikan2:"20:26",zikan3:"20:27" },

      { time: "20:06",zikan:"20:29",zikan1:"20:35",zikan2:"20:48",zikan3:"20:50" },

      { time: "21:00",zikan:"21:23",zikan1:"21:29",zikan2:"21:42",zikan3:"21:43" },
      { time: "21:30",zikan:"21:55",zikan1:"22:00",zikan2:"22:14",zikan3:"22:15" },

      { time: "22:38",zikan:"23:01",zikan1:"23:06",zikan2:"23:20",zikan3:"23:21" },

    ],
    kudari: [
       {time:"青葉通り発",zikan:"仙台",zikan1:"福田町",zikan2:"中野栄",zikan3:"高城町",zikan4:"備考"},
       { time: "5:17", zikan:"5:18",zikan1:"5:32",zikan2:"5:37",zikan3:"6:03",zikan4:"なし"},

       { time: "6:00", zikan:"6:01",zikan1:"6:15",zikan2:"6:20",zikan3:"6:03",zikan4:"なし"},
       { time: "6:28", zikan:"6:29",zikan1:"6:44",zikan2:"6:48",zikan3:"7:15",zikan4:"なし"},
       { time: "6:41", zikan:"6:42",zikan1:"6:57",zikan2:"7:02",zikan3:"・・・",zikan4:"東塩釜まで"},
       { time: "6:54", zikan:"6:55",zikan1:"7:10",zikan2:"7:14",zikan3:"7:40",zikan4:"なし"},

       
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
      const stopsHTML = (entry.stops || []).map((t) => `<td>${t}</td>`).join("");
      row.innerHTML = `<td>${entry.time}</td><td>${entry.zikan}</td><td>${entry.zikan1}</td><td>${entry.zikan2}</td><td>${entry.zikan3}</td><td>${entry.zikan4}</td>`;
      tbody.appendChild(row);
    });
    highlightNextTrain(); 

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
  