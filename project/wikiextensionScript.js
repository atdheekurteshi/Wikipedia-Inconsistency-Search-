// ==UserScript==
// @name        Wiki Plugin
// @namespace   http://k5.com
// @include     http://en.wikipedia.org/wiki/*
// @include     https://www.wikipedia.org/
// @include     http://www.wikipedia.org/*
// @include     https://en.wikipedia.org/wiki/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js
// @version     1
// ==/UserScript==
 //var result = confirm("Found Incosistency?");

        //if (result)
        //{
            $(document).ready(function () {
                $('.pure-button pure-button-primary-progressive').click(function () {
                    var textSearch = $('.search-input').val();
                   
                    $.ajax({
                        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&page="+textSearch+"&redirects&prop=text&callback=?",
                        //url: "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=" + textSearch + "&rvsection=0",
                        dataType: "jsonp",
                        success: function showGetJson(data) {
                            //var wikiHTML = data.parse.text["*"];
                            // if (response.formError == true) {
                        // }  
                        //wikiHTML = data.parse.text["*"];

                        //$wikiDOM = $("<document>" + wikiHTML + "</document>");
                        //$("#data").appendTo($("<document>" + wikiHTML + "</document>").find('.infobox').text('population'));

                        //$(".showGetJson").html(JSON.stringify(data))https://en.wikipedia.org/w/api.php?format=xml&action=query&generator=search&gsrsearch=starwars&callback=?
                        //console.log(data)
                        //$('.success').appendTo($('.population').append(($("<p><h3>Found the inconsistency</h3></p>"))
                        //$('.population').show();
                        //$('.popde').show();
                        //$('.popfr').show();
                        //$('.popes').show();
                             console.log(textSearch);
                        $('#mw-page-base').append($("<span>"+data.parse.text["*"]+"</span>")).find('.mergedrow');
                        //$('#mw-page-base').append($('<html><head><title></title><head><body><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script><div style="width:auto;height:auto; margin-top:100px;margin-left:250px;"><h3>Search for inconsistency between cities in other langauge</h3><br /><input type="text" id="searchText" /><button type="submit" id="getData">Click me for inconsistency</button><div id="firstDiv"><ul style="font-family:Arial;"><li class="en" data-result="Original Result!.."><h1>English</h1><!--<p class="country">Country: <p class="city">City: </p></p>--><p class="population">English Default Search Resault</p>"'+data.parse.text["*"]+'"</li><li class="de" data-discount="176"><h1>German</h1><!--<p class="countryde">Land: </p>--><p class="cityde">Stadt: </p><p class="popde">Bevölkerung  Iconsistencys</p></li><li class="fr" data-discount="176"><h1>French</h1><!--<p class="countryfr">Pays: </p>--><p class="cityfr">Ville: </p><p class="popfr">Popul Incohérence</p></li><li class="es" data-discount="176"><h1>Spanish</h1><!--<p class="countryes">Pais </p>--><p class="cityes">Ciudad:  </p><p class="popes">Popul Inconsecuencia</p><!--<button class="book4">Book Now</button> --></li></ul></div><div id="enpopulation"></div><div id="depopulation"></div><div id="frpopulation"></div><div id="espopulation"></div></div><body></html>').find('.mergedrow'));
                        //$('#depopulation').append($("<span>" + wikiHTML + "</span>").find('.mergedrow'));
                        //$('#frpopulation').append($("<span>" + wikiHTML + "</span>").find('.mergedrow'));
                        //$('#espopulation').append($("<span>" + wikiHTML + "</span>").find('.infobox.geography tr'));
                        //$('.population').hide().append($('<li style="margin-top:-53px;padding-left:58px;text-decoration:underline;color:red;">"' + value + "'</li>'"));
                        //$('.popde').hide().append($('<li style="margin-top:-53px;padding-left:58px;text-decoration:underline;color:red;">"' + value+"'</li>'"));
                        //$('.popfr').hide().append($('<li style="margin-top:-53px;padding-left:58px;text-decoration:underline;color:red;">').html(value));
                        //$('.popes').hide().append($('<li style="margin-top:-53px;padding-left:75px;text-decoration:underline;color:red;">').html(value));
                        //$('.country').append($('<li style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').find('.infobox'));



                        //$("#data").append($("<span>" + data + "</span>").find('.infobox'))
                        //console.log($("#data").append($("<span>" + data + "</span>").find('.infobox')));sss
                    },
                    error: function (errorMessage) {
                    }
            });
        });

             //$('#mw-page-base').before($('<html><head><title></title><head><body><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script><div style="width:auto;height:auto; margin-top:100px;margin-left:250px;"><h3>Search for inconsistency between cities in other langauge</h3><br /><input type="text" id="searchText" /><button type="submit" id="getData">Click me for inconsistency</button><div id="firstDiv"><ul style="font-family:Arial;"><li class="en" data-result="Original Result!.."><h1>English</h1><!--<p class="country">Country: <p class="city">City: </p></p>--><p class="population">English Default Search Resault</p></li><li class="de" data-discount="176"><h1>German</h1><!--<p class="countryde">Land: </p>--><p class="cityde">Stadt: </p><p class="popde">Bevölkerung  Iconsistencys</p></li><li class="fr" data-discount="176"><h1>French</h1><!--<p class="countryfr">Pays: </p>--><p class="cityfr">Ville: </p><p class="popfr">Popul Incohérence</p></li><li class="es" data-discount="176"><h1>Spanish</h1><!--<p class="countryes">Pais </p>--><p class="cityes">Ciudad:  </p><p class="popes">Popul Inconsecuencia</p><!--<button class="book4">Book Now</button> --></li></ul></div><div id="enpopulation"></div><div id="depopulation"></div><div id="frpopulation"></div><div id="espopulation"></div></div><body></html>'));
            //$('.pure-button pure-button-primary-progressive').click(function(){
               //var textSearch = $('#searchInput').val;
                /*
                $.ajax({
                    url: "http://en.wikipedia.org//w/api.php?action=query&format=json&list=search&utf8=1&srsearch"+textSearch+"&srnamespace=0%7C2600&srwhat=text&srprop=snippet&sroffset=0&srlimit=1",
                    dataType: "jsonp",
                    success: show,
                    error: function (errorMessage) {
                    }
                   });
                 });
                function show(title) {
                    for (var t in title) {
                        var tObject = title[t];
                        for (var t1 in tObject.search) {
                            var sO = tObject.search[t1];

                            //console.log(sO.title);
                            $('#mw-head').append($('<li style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').text(sO.title));
                            //$('.countryde').append($('<li style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').text(sO.title));
                            //$('.countryfr').append($('<li style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').text(sO.title));
                            //$('.countryes').append($('<li style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').text(sO.title));
                            //$('#en').appendTo($('.country').append($('<li>').text(sO.title)));
                        }

                    }
                }
                $.ajax({
                    url: "http://en.wikipedia.org//w/api.php?action=query&format=json&list=search&utf8=1&srsearch=pristina&srnamespace=0%7C2600&srwhat=text&srprop=snippet&sroffset=0&srlimit=1",
                    dataType: "jsonp",
                    success: function (response) {
                        for (var t in response) {
                            var tObject = response[t];
                            for (var t1 in tObject.search) {
                                var sO = tObject.search[t1];
                                //console.log(sO.title);
                                $('.city').append($('<li style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').text(sO.title));
                                $('.cityde').append($('<li href="https://en.wikipedia.org/wiki/Pristina" style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').text(sO.title));
                                $('.cityfr').append($('<li href="https://en.wikipedia.org/wiki/Pristina" style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').text(sO.title));
                                $('.cityes').append($('<li style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').text(sO.title));
                                //$('#en').appendTo($('.country').append($('<li>').text(sO.title)));
                            }

                        }

                    },
                    error: function (errorMessage) {
                    }
                });
            });
        //}
        //else
       // {
            // Do nothing; they cancelled
        //}*/
     });

