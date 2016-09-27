// ==UserScript==
// @name        Wiki Plugin
// @namespace   http://k5.com
// @include     http://en.wikipedia.org/wiki/*
// @include     https://en.wikipedia.org/wiki/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1
// @version     1
// ==/UserScript==

//var url = "https://en.wikipedia.org/wiki/Austria";
//if (result) {

$(document).ready(function () {
        //var arr = ["vienna",  "prishtina" ];
        var vCity ="vienna";
        var pCity ="prishtina";
        //var vCity ="vienna";
        $('.population').hide();
        $('.popde').hide();
        $('.popfr').hide();
        $('.popes').hide();

        /*var wikipediaHTMLResult = function(data)
        {
            var readData = $('<div>' + data.parse.text["*"] + '</div>');
            // handle redirects
            var redirect = readData.find('li:contains("REDIRECT") a').text();
            if(redirect != '') {
                callWikipediaAPI(redirect);
                return;
            }
    
            var box = readData.find('.infobox');
    
            var binomialName    = box.find('.binomial').text();
            var fishName        = box.find('th').first().text();
            var imageURL        = null;
            // Check if page has images
            if(data.parse.images.length >= 1) {
                imageURL        = box.find('img').first().attr('src');
            }
            $.ajax({
                url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?",
                page: wikipediaPage,
                prop: 'text|images',
                uselang: 'en', wikipediaHTMLResult,
                dataType: "jsonp",
                success: show,
                error: function (errorMessage) {
                }
                /*http://www.mediawiki.org/wiki/API:Parsing_wikitext#parse
            })
    
            $('.insertTest').append('<div><img src="' + imageURL + '"/>' + fishName + ' <i>(' + binomialName + ')</i></div>');
            callWikipediaAPI('Aholehole');
        };*/



        /*
            attach click hanlder to input button with id of alert_button
            and when user click on that button we will show custom alert.
       
            in example we pass event argument and use
            preventDefaut function to stop furture click execution.
            In short it will prevent our custom click execution from other event
      

        $("#alert_button").click(function (e) {
            e.preventDefault();
          
                jAlert is function which will show custom alert.
                It has two argument.
                First argument is content for alert.
                Second is the Alert heading.
           
            jAlert('This is a custom alert box', 'Alert Dialog');
        });

        $("#confirm_button").click(function (e) {
            e.preventDefault();
           
                jConfirm is function which will show custom confirm box.
                It has two argument.
                First argument is message for confirmation.
                Second is the Confirm heading.
                and has callback function which will perform exatra 
                code like what user select and etc
           
            jConfirm('Can you confirm this?', 'Confirmation Dialog', function (r) {
                jAlert('Confirmed: ' + r, 'Confirmation Results');
            });
        });

        $("#prompt_button").click(function (e) {
            e.preventDefault();
           
                jPrompt is function which will show custom promt window.
                It has three argument.
                First argument is label text.
                Second is the predefined value for promt.
                Third is promt heading.
                and has callback function which will perform exatra 
                code like what user enter.
            
            jPrompt('Type something:', 'Prefilled value', 'Prompt Dialog', function (r) {
                if (r) jAlert('You entered: ' + r, 'Result');
            });
        });
        
        $('#getData').click(function () {
            var textSearch = $('#searchText').val();
           
                $.ajax({
                    url: "http://wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=" + textSearch + "&srnamespace=0%7C2600&srwhat=text&srprop=snippet&sroffset=0&srlimit=1",
                    dataType: "jsonp",
                    success: function show(title) {
                        for (var t in title) {
                            var tObject = title[t];
                            for (var t1 in tObject.search) {
                                var sO = tObject.search[t1];

                                console.log(sO.title);
                                $('.country').hide().append($('<li style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').text(sO.title));
                                $('.countryde').hide().append($('<li style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').text(sO.title));
                                $('.countryfr').hide().append($('<li style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').text(sO.title));
                                $('.countryes').hide().append($('<li style="margin-top:-18px;padding-left:75px;text-decoration:underline;color:red;">').text(sO.title));
                                //$('#en').appendTo($('.country').append($('<li>').text(sO.title)));
                            }

                        }
                    },
                    error: function (errorMessage) {
                    }
                });
                
            });
             $('#getData').click(function () {
            var textSearch = $('#searchText').val();
            $.ajax({
                url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&page=" + textSearch + "&redirects&prop=text&callback=?",
                    //url: "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=" + textSearch + "&rvsection=0",
                    dataType: "jsonp",
                    success: function showGetJson(data) {
                        var wikiHTML = data.parse.text["*"];
                        // if (response.formError == true) {

                        // }  
                        //wikiHTML = data.parse.text["*"];

                        //$wikiDOM = $("<document>" + wikiHTML + "</document>");
                        //$("#data").appendTo($("<document>" + wikiHTML + "</document>").find('.infobox').text('population'));

                        //$(".showGetJson").html(JSON.stringify(data))https://en.wikipedia.org/w/api.php?format=xml&action=query&generator=search&gsrsearch=starwars&callback=?
                        //console.log(data)
                        //$('.success').appendTo($('.population').append(($("<p><h3>Found the inconsistency</h3></p>"))
                        $('.population').show();
                        //$('.popde').show();
                        //$('.popfr').show();
                        //$('.popes').show();
                        $('#enpopulation').append($("<span>" + wikiHTML + "</span>").find('.mergedrow'));
                        //$('#depopulation').append($("<span>" + wikiHTML + "</span>").find('.mergedrow'));
                        //$('#frpopulation').append($("<span>" + wikiHTML + "</span>").find('.mergedrow'));
                        //$('#espopulation').append($("<span>" + wikiHTML + "</span>").find('.infobox.geography tr'));
                        //$('.population').hide().append($('<li style="margin-top:-53px;padding-left:58px;text-decoration:underline;color:red;">"' + value + "'</li>'"));
                        //$('.popde').hide().append($('<li style="margin-top:-53px;padding-left:58px;text-decoration:underline;color:red;">"' + value+"'</li>'"));
                        //$('.popfr').hide().append($('<li style="margin-top:-53px;padding-left:58px;text-decoration:underline;color:red;">').html(value));
                        //$('.popes').hide().append($('<li style="margin-top:-53px;padding-left:75px;text-decoration:underline;color:red;">').html(value));
                        //$('.country').append($('<li style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').find('.infobox'));



                        //$("#data").append($("<span>" + data + "</span>").find('.infobox'))
                        //console.log($("#data").append($("<span>" + data + "</span>").find('.infobox')));
                    },
                    error: function (errorMessage) {
                    }
            });
        });
            */
        
   
        $('#getData').click(function () {
            var textSearch = $('#searchText').val();
            $.ajax({
                url: "http://wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=" + textSearch + "&srnamespace=0%7C2600&srwhat=text&srprop=snippet&sroffset=0&srlimit=1",
                dataType: "jsonp",
                success: function show(title) {
                    for (var t in title) {
                        var tObject = title[t];
                        for (var t1 in tObject.search) {
                            var sO = tObject.search[t1];

                            console.log(sO.title);
                            $('.city').append($('<li style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').text(sO.title));
                            $('.cityde').append($('<li style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').text(sO.title));
                            $('.cityfr').append($('<li style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').text(sO.title));
                            $('.cityes').append($('<li style="margin-top:-18px;padding-left:75px;text-decoration:underline;color:red;">').text(sO.title));
                            //$('#en').appendTo($('.country').append($('<li>').text(sO.title)));
                        }

                    }
                },
                error: function (errorMessage) {
                }
            });
        });
      
        $('#getData').click(function () {
            var textSearch = $('#searchText').val();
            $.ajax({
                url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&page=" + textSearch + "&redirects&prop=text&callback=?",
                    //url: "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=" + textSearch + "&rvsection=0",
                    dataType: "jsonp",
                    success: function showGetJson(data) {
                        var wikiHTML = data.parse.text["*"];
                        $('.population').show();
                      
                        $('#enpopulation').append($("<span>" + wikiHTML + "</span>").find('.mergedrow'));
                    },
                    error: function (errorMessage) {
                    }
            });
        });

       //show the default language without sarching and if the user typs the city in another language than compare.
        $('#getData').click(function () {
            var textSearch = $('#searchText').val();
            
            if (textSearch =="viena") {
                var result = confirm("Found Incosistency?");
                $.ajax({
                    url: "https://es.wikipedia.org/w/api.php?action=parse&format=json&page=" + textSearch + "&redirects&prop=text&callback=?",
                    //url: "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=" + textSearch + "&rvsection=0",
                    dataType: "jsonp",
                    success: function showGetJson(data) {
                        var wikiHTML = data.parse.text["*"];
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
                        $('.popes').show();
                        $('.de').hide();
                        $('.fr').hide();
                        //$('#enpopulation').append($("<span>" + wikiHTML + "</span>").find('.mergedrow'));
                        //$('#depopulation').append($("<span>" + wikiHTML + "</span>").find('.mergedrow'));
                        //$('#frpopulation').append($("<span>" + wikiHTML + "</span>").find('.mergedrow'));
                        $('#espopulation').append($("<span>" + wikiHTML + "</span>").find('.infobox.geography tr'));
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
            }
            else if (textSearch =="wien") {
                var result = confirm("Incosistency Not Found ?");
                $.ajax({
                    url: "https://de.wikipedia.org/w/api.php?action=parse&format=json&page=" + textSearch + "&redirects&prop=text&callback=?",
                    //url: "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=" + textSearch + "&rvsection=0",
                    dataType: "jsonp",
                    success: function showGetJson(data) {
                        var wikiHTML = data.parse.text["*"];
                        $('.popde').show();
                        $('.fr').hide();
                        $('.es').hide();
                        $('#depopulation').append($("<span>" + wikiHTML + "</span>").find('.infobox'));
                    },
                    error: function (errorMessage) {
                    }
                });
            }
            else if (textSearch == "vienne") {
                var result = confirm("Incosistency Not Found?");
                $.ajax({
                    url: "https://fr.wikipedia.org/w/api.php?action=parse&format=json&page=Vienne_(Autriche)&redirects&prop=text&callback=?",
                    //url: "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=" + textSearch + "&rvsection=0",
                    dataType: "jsonp",
                    success: function showGetJson(data) {
                        var wikiHTML = data.parse.text["*"];
                        $('.popfr').show();
                        $('.es').hide();
                        $('.de').hide();
                        $('#frpopulation').append($("<span>" + wikiHTML + "</span>").find('.infobox_v2'));
                    },
                    error: function (errorMessage) {
                    }
                });

            }
            //Berlin Search Differnt Language
            else if (textSearch == "berlin") {
                var result = confirm("Found Incosistency?");
                $.ajax({
                   
                    url: "https://de.wikipedia.org/w/api.php?action=parse&format=json&page=" + textSearch + "&redirects&prop=text&callback=?",
                    //url: "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=" + textSearch + "&rvsection=0",
                    dataType: "jsonp",
                    success: function showGetJson(data) {
                        var wikiHTML = data.parse.text["*"];
                        $('.popde').show();
                        $('.fr').hide();
                        $('.es').hide();
                        $('#depopulation').append($("<span>" + wikiHTML + "</span>").find('.hintergrundfarbe5'));
                    },
                    error: function (errorMessage) {
                    }
                });
            }
          
            else if (textSearch == "berlin_") {
                var result = confirm("Found Incosistency?");
                $.ajax({
                    url: "https://fr.wikipedia.org/w/api.php?action=parse&format=json&page=" + textSearch + "&redirects&prop=text&callback=?",
                    //url: "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=" + textSearch + "&rvsection=0",
                    dataType: "jsonp",
                    success: function showGetJson(data) {
                        var wikiHTML = data.parse.text["*"];
                        $('.popfr').show();
                        $('.de').hide();
                        $('.es').hide();
                        $('#frpopulation').append($("<span>" + wikiHTML + "</span>").find('.infobox_v2'));
                    },
                    error: function (errorMessage) {
                    }
                });
            }
            else if (textSearch == "Berlin___") {
                var result = confirm("Found Incosistency?");
                $.ajax({
                    type: 'GET',
                    url: "https://es.wikipedia.org/w/api.php?action=parse&format=json&page=" + textSearch + "&redirects&prop=text&callback=?",
                    //url: "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=" + textSearch + "&rvsection=0",
                    dataType: "jsonp",
                    success: function showGetJson(data) {
                        var wikiHTML = data.parse.text["*"];
                        $('.popes').show();
                        $('.fr').hide();
                        $('.de').hide();
                        $('#espopulation').append($("<span>" + wikiHTML + "</span>").find('.infobox.geography tr'));
                    },
                    error: function (errorMessage) {
                    }
                });
            }
            //Paris Search Different Language
            else if (textSearch == "paris") {
                var result = confirm("Found Incosistency?");
                $.ajax({
                    url: "https://de.wikipedia.org/w/api.php?action=parse&format=json&page=" + textSearch + "&redirects&prop=text&callback=?",
                    dataType: "jsonp",
                    success: function showGetJson(data) {
                        var wikiHTML = data.parse.text["*"];
                        $('.popde').show();
                        $('.fr').hide();
                        $('.es').hide();
                        $('#depopulation').append($("<span>" + wikiHTML + "</span>").find('.wikitable'));
                    },
                    error: function (errorMessage) {
                    }
                });
            }
            else if (textSearch == "paris_") {
                var result = confirm("Found Incosistency?");
                $.ajax({
                    url: "https://fr.wikipedia.org/w/api.php?action=parse&format=json&page=" + textSearch + "&redirects&prop=text&callback=?",
                    dataType: "jsonp",
                    success: function showGetJson(data) {
                        var wikiHTML = data.parse.text["*"];
                        $('.popfr').show();
                        $('.de').hide();
                        $('.es').hide();
                        $('#frpopulation').append($("<span>" + wikiHTML + "</span>").find('.infobox_v2'));
                    },
                    error: function (errorMessage) {
                    }
                });

            }
            
            else if (textSearch == "Paris___") {
                var result = confirm("Found Incosistency?");
                $.ajax({
                    type: 'GET',
                    url: "https://es.wikipedia.org/w/api.php?action=parse&format=json&page="+textSearch+"&redirects&prop=text&callback=?",
                    //url: "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=" + textSearch + "&rvsection=0",
                    dataType: "jsonp",
                    success: function showGetJson(data) {
                        var wikiHTML = data.parse.text["*"];
                        $('.popes').show();
                        $('.fr').hide();
                        $('.de').hide();
                        $('#espopulation').append($("<span>" + wikiHTML + "</span>").find('.infobox.geography tr'));
                    },
                    error: function (errorMessage) {    
                    }
                });
            }
            //Madrid Search Different Language
            else if (textSearch == "madrid") {
                var result = confirm("Incosistency Not Found?");
                $.ajax({
                    url: "https://de.wikipedia.org/w/api.php?action=parse&format=json&page=madrid&redirects&prop=text&callback=?",
                    dataType: "jsonp",
                    success: function showGetJson(data) {
                        var wikiHTML = data.parse.text["*"];
                        $('.popde').show();
                        $('.fr').hide();
                        $('.es').hide();
                        $('#depopulation').append($("<span>" + wikiHTML + "</span>").find('.wikitable'));
                    },
                    error: function (errorMessage) {
                    }
                });
            }
            else if (textSearch == "madrid_") {
                var result = confirm("Incosistency Not Found?");
                $.ajax({
                    url: "https://fr.wikipedia.org/w/api.php?action=parse&format=json&page="+textSearch+"&redirects&prop=text&callback=?",
                    dataType: "jsonp",
                    success: function showGetJson(data) {
                        var wikiHTML = data.parse.text["*"];
                        $('.popfr').show();
                        $('.de').hide();
                        $('.es').hide();
                        $('#frpopulation').append($("<span>" + wikiHTML + "</span>").find('.infobox_v2'));
                    },
                    error: function (errorMessage) {
                    }
                });

            }
            else if (textSearch == "Madrid") {
                var result = confirm("Incosistency Not Found?");
                $.ajax({
                    url: "https://es.wikipedia.org/w/api.php?action=parse&format=json&page=" + textSearch + "&redirects&prop=text&callback=?",
                    //url: "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=" + textSearch + "&rvsection=0",
                    dataType: "jsonp",
                    success: function showGetJson(data) {
                        var wikiHTML = data.parse.text["*"];
                        $('.popes').show();
                        $('.de').hide();
                        $('.fr').hide();
                        $('#espopulation').append($("<span>" + wikiHTML + "</span>").find('.infobox.geography tr'));
                    },
                    error: function (errorMessage) {
                    }
                });

            }
           
        });

       
         //console.log($('#mw-page-base').append('<div style="margin-top:500px;"><span>What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></div>'))
          




        /*
        $.ajax({
           
            dataType: "jsonp",
            success: function (response) {
                //console.log(sO.title);
                        wikiHTML = response.parse.text["*"];
                        $wikiDOM = $("<document>"+wikiHTML+"</document>");
                        $(".city").append($wikiDOM.find('.infobox').html());
                        $('.city').append($('<li style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').text());
                        $('.cityde').append($('<li href="https://en.wikipedia.org/wiki/Pristina" style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').text());
                        $('.cityfr').append($('<li href="https://en.wikipedia.org/wiki/Pristina" style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').text());
                        $('.cityes').append($('<li style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').text());
                        //$('#en').appendTo($('.country').append($('<li>').text(sO.title)));
                    }
      });
        */
    });
//}
//else {
    //Do nothing; they cancelled
//}
