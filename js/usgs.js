
var stations = '&sites=08167000,08167500,08167700,08167800,08167900,08169000,08168500,08168797,08169792,08173900,08175800,08176500';

var request = $.ajax({
    url: 'http://waterservices.usgs.gov/nwis/iv/?format=json' + stations 
});

request.done(function (results) {
    buildFrame(results);
    for (i = 0; i < results.value.timeSeries.length; ++i) {
        stationCode = results.value.timeSeries[i].sourceInfo.siteCode[0].value;
        dataLoc = results.value.timeSeries[i].sourceInfo.siteName;
        dataPoint = results.value.timeSeries[i].values[0].value[0].value;
        dataUnit = results.value.timeSeries[i].variable.variableName;
        dateTime = results.value.timeSeries[i].values[0].value[0].dateTime
        if ($( "#" + stationCode).text().indexOf(dataLoc) == -1) {
            $( "#" + stationCode ).append("<h3>" + dataLoc + "</h3>"); 
        }
        $( "#" + stationCode ).append("<h5>" + dataPoint + " " + dataUnit + "</h5>");
        $( "#" + stationCode ).append("<h5>" + " " + dateTime + "</h5>");
    };
});

function buildFrame(results) {
    var r=[];
    for (i = 0; i < results.value.timeSeries.length; ++i) {
        stationCode = results.value.timeSeries[i].sourceInfo.siteCode[0].value;
        r.push(stationCode);
    };
    var u = r.filter( onlyUnique );
    console.log(u);
    for (i=0; i < u.length; ++i) {
        var newdiv = $ ( "<div></div>" );
        newdiv.attr( "id", u[i]);
        newdiv.addClass( "panel" );
        $( "#row1" ).append(newdiv);
    };
} 

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
