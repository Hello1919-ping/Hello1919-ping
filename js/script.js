let timetableData = [];

// JSON読込
fetch('timetable.json')
  .then(res => res.json())
  .then(data => {
    timetableData = data;
    displayResults(timetableData);
  });

// 入力イベント（駅名 or 時間セレクト変更）
document.getElementById("stationInput").addEventListener("input", filterData);
document.getElementById("timeSelect").addEventListener("change", filterData);

function filterData() {
  const stationKey = document.getElementById("stationInput").value.trim();
  const timeKey = document.getElementById("timeSelect").value; // "06" など

  const filtered = timetableData.filter(entry => {

    // 駅名フィルタ
    const matchStation = stationKey === "" || entry.station.includes(stationKey);

    // 時間フィルタ（出発時刻の先頭2桁で判断）
    const hour = entry.departure.substring(0, 2);
    const matchTime = timeKey === "" || hour === timeKey;

    return matchStation && matchTime;
  });

  displayResults(filtered);
}

// 表表示
function displayResults(data) {
  const tbody = document.querySelector('#resultsTable tbody');
  tbody.innerHTML = '';

  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4">該当するデータがありません。</td></tr>';
    return;
  }

  data.forEach(entry => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${entry.station}</td>
      <td>${entry.line}</td>
      <td>${entry.departure}</td>
      <td>${entry.destination}</td>
    `;
    tbody.appendChild(tr);
  });
}