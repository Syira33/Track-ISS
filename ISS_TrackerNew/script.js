
// drawing map interface on #issMap
//L.map() creates a Leaftlet map
const map = L.map('issMap').setView([0, 0], 1);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tile_url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tile_url, {attribution});
tiles.addTo(map);

// findISS() function definition
const api_url = 'https://api.wheretheiss.at/v1/';

async function findISS() {

    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let position = 'positions?timestamps=';
    let coordinates = 'coordinates';
    let satellite = 'satellites';
    let units = '&units=miles';
    const id = '25544';

    datetime = date + " " + time;

    //set dates for the selected time
    const dates = new Date(datetime);
    
    //get period for before and after an hour
    //before an hour
    let minusMin = -10;
    let minusmin10 = new Date(dates.getTime() + (minusMin * 60000));
    let minusmin20 = new Date(minusmin10.getTime() + (minusMin * 60000));
    let minusmin30 = new Date(minusmin20.getTime() + (minusMin * 60000));
    let minusmin40 = new Date(minusmin30.getTime() + (minusMin * 60000));
    let minusmin50 = new Date(minusmin40.getTime() + (minusMin * 60000));
    let minusmin60 = new Date(minusmin50.getTime() + (minusMin * 60000));

    //after an hour
    let plusMin = 10;
    let plusmin10 = new Date(dates.getTime() + (plusMin * 60000));
    let plusmin20 = new Date(plusmin10.getTime() + (plusMin * 60000));
    let plusmin30 = new Date(plusmin20.getTime() + (plusMin * 60000));
    let plusmin40 = new Date(plusmin30.getTime() + (plusMin * 60000));
    let plusmin50 = new Date(plusmin40.getTime() + (plusMin * 60000));
    let plusmin60 = new Date(plusmin50.getTime() + (plusMin * 60000));

    document.getElementById('timeselected').textContent = dates;

    document.getElementById('plusmin10').textContent = plusmin10;
    document.getElementById('plusmin20').textContent = plusmin20;
    document.getElementById('plusmin30').textContent = plusmin30;
    document.getElementById('plusmin40').textContent = plusmin40;
    document.getElementById('plusmin50').textContent = plusmin50;
    document.getElementById('plusmin60').textContent = plusmin60;

    document.getElementById('minusmin10').textContent = minusmin10;
    document.getElementById('minusmin20').textContent = minusmin20;
    document.getElementById('minusmin30').textContent = minusmin30;
    document.getElementById('minusmin40').textContent = minusmin40;
    document.getElementById('minusmin50').textContent = minusmin50;
    document.getElementById('minusmin60').textContent = minusmin60;

    //Convert date to unix timestamp format
    pickTime = dates / 1000;
    timePlus10 = plusmin10 / 1000;
    timePlus20 = plusmin20 / 1000;
    timePlus30 = plusmin30 / 1000;
    timePlus40 = plusmin40 / 1000;
    timePlus50 = plusmin50 / 1000;
    timePlus60 = plusmin60 / 1000;

    timeMinus10 = minusmin10 / 1000;
    timeMinus20 = minusmin20 / 1000;
    timeMinus30 = minusmin30 / 1000;
    timeMinus40 = minusmin40 / 1000;
    timeMinus50 = minusmin50 / 1000;
    timeMinus60 = minusmin60 / 1000;

    //get api_url for position of every timestamps
    let position_url = api_url + satellite + '/' + id + '/' + position + pickTime + "," + timePlus10 + "," + timePlus20 + "," + timePlus30 + "," + timePlus40 + "," + timePlus50 + "," + timePlus60 + "," + timeMinus10 + "," + timeMinus20 + "," + timeMinus30 + "," + timeMinus40 + "," + timeMinus50 + "," + timeMinus60 + units;

    console.log(position_url);

    const response = await fetch(position_url);
    const data = await response.json();

    //get latitude and longitude for each positions
    let pickTimeLat = data[0].latitude;
    let pickTimeLong = data[0].longitude;

    let pickTime_coord = pickTimeLat + ',' + pickTimeLong;
    L.marker([pickTimeLat, pickTimeLong]).addTo(map);

    let plusmin10Lat = data[1].latitude;
    let plusmin10Long = data[1].longitude;

    let plusmin10_coord = plusmin10Lat + ',' + plusmin10Long;
    L.marker([plusmin10Lat, plusmin10Long]).addTo(map);


    let plusmin20Lat = data[2].latitude;
    let plusmin20Long = data[2].longitude;

    let plusmin20_coord = plusmin20Lat + ',' + plusmin20Long;
    L.marker([plusmin20Lat, plusmin20Long]).addTo(map);


    let plusmin30Lat = data[3].latitude;
    let plusmin30Long = data[3].longitude;

    let plusmin30_coord = plusmin30Lat + ',' + plusmin30Long;
    L.marker([plusmin30Lat, plusmin30Long]).addTo(map);


    let plusmin40Lat = data[4].latitude;
    let plusmin40Long = data[4].longitude;

    let plusmin40_coord = plusmin40Lat + ',' + plusmin40Long;
    L.marker([plusmin40Lat, plusmin40Long]).addTo(map);

    let plusmin50Lat = data[5].latitude;
    let plusmin50Long = data[5].longitude;

    let plusmin50_coord = plusmin50Lat + ',' + plusmin50Long;
    L.marker([plusmin50Lat, plusmin50Long]).addTo(map);

    let plusmin60Lat = data[6].latitude;
    let plusmin60Long = data[6].longitude;

    let plusmin60_coord = plusmin60Lat + ',' + plusmin60Long;
    L.marker([plusmin60Lat, plusmin60Long]).addTo(map);

    let minusmin10Lat = data[7].latitude;
    let minusmin10Long = data[7].longitude;

    let minusmin10_coord = minusmin10Lat + ',' + minusmin10Long;
    L.marker([minusmin10Lat, minusmin10Long]).addTo(map);

    let minusmin20Lat = data[8].latitude;
    let minusmin20Long = data[8].longitude;

    let minusmin20_coord = minusmin20Lat + ',' + minusmin20Long;
    L.marker([minusmin20Lat, minusmin20Long]).addTo(map);

    let minusmin30Lat = data[9].latitude;
    let minusmin30Long = data[9].longitude;

    let minusmin30_coord = minusmin30Lat + ',' + minusmin30Long;
    L.marker([minusmin30Lat, minusmin30Long]).addTo(map);

    let minusmin40Lat = data[10].latitude;
    let minusmin40Long = data[10].longitude;

    let minusmin40_coord = minusmin40Lat + ',' + minusmin40Long;
    L.marker([minusmin40Lat, minusmin40Long]).addTo(map);

    let minusmin50Lat = data[11].latitude;
    let minusmin50Long = data[11].longitude;

    let minusmin50_coord = minusmin50Lat + ',' + minusmin50Long;
    L.marker([minusmin50Lat, minusmin50Long]).addTo(map);

    let minusmin60Lat = data[12].latitude;
    let minusmin60Long = data[12].longitude;

    let minusmin60_coord = minusmin60Lat + ',' + minusmin60Long;
    L.marker([minusmin60Lat, minusmin60Long]).addTo(map);

    //Get api_url for coordinate of timestamp
    let coordinate_pickTime = api_url + coordinates + '/' + pickTime_coord;
    let coordinate_min10 = api_url + coordinates + '/' + plusmin10_coord;
    let coordinate_min20 = api_url + coordinates + '/' + plusmin20_coord;
    let coordinate_min30 = api_url + coordinates + '/' + plusmin30_coord;
    let coordinate_min40 = api_url + coordinates + '/' + plusmin40_coord;
    let coordinate_min50 = api_url + coordinates + '/' + plusmin50_coord;
    let coordinate_min60 = api_url + coordinates + '/' + plusmin60_coord;
    let coordinate_minusmin10 = api_url + coordinates + '/' + minusmin10_coord;
    let coordinate_minusmin20 = api_url + coordinates + '/' + minusmin20_coord;
    let coordinate_minusmin30 = api_url + coordinates + '/' + minusmin30_coord;
    let coordinate_minusmin40 = api_url + coordinates + '/' + minusmin40_coord;
    let coordinate_minusmin50 = api_url + coordinates + '/' + minusmin50_coord;
    let coordinate_minusmin60 = api_url + coordinates + '/' + minusmin60_coord;

    //Get data of location for each timestamp

    //timestamp normal
    const response2 = await fetch(coordinate_pickTime);
    const normaltimedata = await response2.json();
    let normaltimelocation = normaltimedata.timezone_id;
    console.log(normaltimelocation);
    document.getElementById('locationselected').textContent = normaltimelocation;

    //add1
    const response3 = await fetch(coordinate_min10);
    const time1data = await response3.json();
    let timeplus1location = time1data.timezone_id;
    console.log(timeplus1location);
    document.getElementById('locationplus10').textContent = timeplus1location;

    //add2
    const response4 = await fetch(coordinate_min20);
    const time2data = await response4.json();
    let timeplus2location = time2data.timezone_id;
    console.log(timeplus2location);
    document.getElementById('locationplus20').textContent = timeplus2location;

    //add3
    const response5 = await fetch(coordinate_min30);
    const time3data = await response5.json();
    let timeplus3location = time3data.timezone_id;
    console.log(timeplus3location);
    document.getElementById('locationplus30').textContent = timeplus3location;

    //add4
    const response6 = await fetch(coordinate_min40);
    const time4data = await response6.json();
    let timeplus4location = time4data.timezone_id;
    console.log(timeplus4location);
    document.getElementById('locationplus40').textContent = timeplus4location;

    //add5
    const response7 = await fetch(coordinate_min50);
    const time5data = await response7.json();
    let timeplus5location = time5data.timezone_id;
    console.log(timeplus5location);
    document.getElementById('locationplus50').textContent = timeplus5location;

    //add6
    const response8 = await fetch(coordinate_min60);
    const time6data = await response8.json();
    let timeplus6location = time6data.timezone_id;
    console.log(timeplus6location);
    document.getElementById('locationplus60').textContent = timeplus6location;

    //minus1
    const response9 = await fetch(coordinate_minusmin10);
    const timeminus1data = await response9.json();
    let timeminus1location = timeminus1data.timezone_id;
    console.log(timeminus1location);
    document.getElementById('locationminus10').textContent = timeminus1location;

    //minus2
    const response10 = await fetch(coordinate_minusmin20);
    const timeminus2data = await response10.json();
    let timeminus2location = timeminus2data.timezone_id;
    console.log(timeminus2location);
    document.getElementById('locationminus20').textContent = timeminus2location;

    //minus3
    const response11 = await fetch(coordinate_minusmin30);
    const timeminus3data = await response11.json();
    let timeminus3location = timeminus3data.timezone_id;
    console.log(timeminus3location);
    document.getElementById('locationminus30').textContent = timeminus3location;

    //minus4
    const response12 = await fetch(coordinate_minusmin40);
    const timeminus4data = await response12.json();
    let timeminus4location = timeminus4data.timezone_id;
    console.log(timeminus4location);
    document.getElementById('locationminus40').textContent = timeminus4location;

    //minus5
    const response13 = await fetch(coordinate_minusmin50);
    const timeminus5data = await response13.json();
    let timeminus5location = timeminus5data.timezone_id;
    console.log(timeminus5location);
    document.getElementById('locationminus50').textContent = timeminus5location;

    //minus6
    const response14 = await fetch(coordinate_minusmin60);
    const timeminus6data = await response14.json();
    let timeminus6location = timeminus6data.timezone_id;
    console.log(timeminus6location);
    document.getElementById('locationminus60').textContent = timeminus6location;
}

//api_url to get data of astronaut on ISS
astros_url = "http://api.open-notify.org/astros.json" 

async function getAstros(){
    const astrosresponse = await fetch(astros_url);
    const astrosdata = await astrosresponse.json();

    p = astrosdata.people;
    
    console.log(p);
    
    //document.write("Currently, there are " + p.length + " astronaut on the space:"+"<br><br>");
    for (i = 0; i < p.length; i++) {
        if(p[i].craft == "ISS"){
            document.write(p[i].name);
            document.write("<br>");
           
        }
    }
}

//backend 
/*var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.wheretheiss.at/v1/satellites/25544?id=25544", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  */
