//var result = confirm("Found Incosistency?");
//if (result)
//{


$(document).ready(function () {
    $('#getData').on('click', function () {
        var textSearch = $('#textSearch').val;
        $.ajax({
            url: "http://en.wikipedia.org//w/api.php?action=query&format=json&list=search&utf8=1&srsearch=" + textSearch + "&srnamespace=0%7C2600&srwhat=text&srprop=snippet&sroffset=0&srlimit=1",
            dataType: "jsonp",
            success: show,
            error: function (errorMessage) {
            }
        })
    })
    function show(title) {
        for (var t in title) {
            var tObject = title[t];
            for (var t1 in tObject.search) {
                var sO = tObject.search[t1];

                //console.log(sO.title);
                $('#data').append($('<li style="margin-top:-18px;padding-left:58px;text-decoration:underline;color:red;">').text(sO.title));
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
                for (t1 in tObject.search) {
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