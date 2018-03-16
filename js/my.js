$(document).ready(function() {
	$('#button').on('click', function(){
		var group = $("#search").val();
		$("#toap").remove();

		if($("#search").val() == 0)
		{
			$("#params").hide();
			$("#wrong").hide();
			$("#wrong2").show();
		}
		else{
			$("#wrong2").hide();

			$("#main").append('<div class="container" id="toap"></div>');
			    $.ajax({
			        url: "http://itunes.apple.com/search?term="+ group,
			        dataType: 'JSON'
			    })
			    .done(function(data) { 
			    	if(data['resultCount'] == 0){
			    		$("#wrong").show();
			    	}
			    	else{$("#params").show();}

			    	for(i=0;i<data['resultCount'];i++){
			    		$("#wrong").hide();
			    		if(i==0 || i % 2 == 0){
			    			$("#toap").append('<div class="row test" id="throw2"><div class="col-md-2 hidden-xs hidden-xxs" id="nothrow"><img class="img-responsive" src="'+data.results[i]['artworkUrl100']+'" alt=""></div><div class="col-md-2 col-xs-3">'+data.results[i]['artistName']+'</div><div class="col-md-2 col-xs-3">'+data.results[i]['trackName']+'</div><div class="col-md-2 col-xs-3">'+data.results[i]['collectionName']+'</div><div class="col-md-2 col-xs-2">'+data.results[i]['primaryGenreName']+'</div><div class="col-md-2 hidden-xxs hidden-xs"><i class="fa fa-plus" id="open"></i></div></div><div class="row" id="dopinfo"><div class="col-md-2"></div><div class="col-md-4 col-xs-12"><h2>'+data.results[i]['artistName']+' - '+data.results[i]['trackName']+' <i class="fa fa-music" aria-hidden="true"></i></h2><p><b>Collections:</b> '+data.results[i]['collectionName']+'</p><p><b>Track Count:</b> '+data.results[i]['trackCount']+'</p><p><b>Price:</b> '+data.results[i]['collectionPrice']+' '+data.results[i]['currency']+'</p></div><div class="col-md-2 mt6"><p><b>Track duration:</b> '+(Math.floor(data.results[i]['trackTimeMillis'] / 1000) / 60).toFixed(0)+':'+(Math.floor(data.results[i]['trackTimeMillis'] / 1000) / 60).toPrecision(3).split(".")[1]+' min'+'</p> <p><b>Track Price:</b> '+data.results[i]['trackPrice']+' '+data.results[i]['currency']+'</p></div><div class="col-md-4"></div></div>');
			    		}
			    		else{
			    			$("#toap").append('<div class="row test" id="throw"><div class="col-md-2 hidden-xs hidden-xxs" id="nothrow"><img class="img-responsive" src="'+data.results[i]['artworkUrl100']+'" alt=""></div><div class="col-md-2 col-xs-3">'+data.results[i]['artistName']+'</div><div class="col-md-2 col-xs-3">'+data.results[i]['trackName']+'</div><div class="col-md-2 col-xs-3">'+data.results[i]['collectionName']+'</div><div class="col-md-2 col-xs-2">'+data.results[i]['primaryGenreName']+'</div><div class="col-md-2 hidden-xxs hidden-xs"><i class="fa fa-plus" id="open"></i></div></div><div class="row" id="dopinfo2"><div class="col-md-2"></div><div class="col-md-4 col-xs-12"><h2>'+data.results[i]['artistName']+' - '+data.results[i]['trackName']+' <i class="fa fa-music" aria-hidden="true"></i></h2><p><b>Collections:</b> '+data.results[i]['collectionName']+'</p><p><b>Track Count:</b> '+data.results[i]['trackCount']+'</p><p><b>Price:</b> '+data.results[i]['collectionPrice']+' '+data.results[i]['currency']+'</p></div><div class="col-md-2 mt6"><p><b>Track duration:</b> '+(Math.floor(data.results[i]['trackTimeMillis'] / 1000) / 60).toFixed(0)+':'+(Math.floor(data.results[i]['trackTimeMillis'] / 1000) / 60).toPrecision(3).split(".")[1]+' min'+'</p> <p><b>Track Price:</b> '+data.results[i]['trackPrice']+' '+data.results[i]['currency']+'</p></div><div class="col-md-4"></div></div>');
			    		}
			    	}
			    })
			    .fail(function(data) { console.log(data); })
		}
	});
 });

$(document).ready(function() {
    $('body').on('click', '.test', function(){
    	if ($(".test").next().is(':visible')) {
    		$(".test").next().slideUp();
    		$(".test").find("#open").removeClass("fa-minus");
    		$(".test").find("#open").addClass("fa-plus");
		}

		if ($(this).next().is(':hidden')) {
    		$(this).next().slideDown();
    		$(this).find("#open").removeClass("fa-plus");
    		$(this).find("#open").addClass("fa-minus");
		}
	});

	$(function() {
	    $(document).keydown(function(e) {
	        switch (e.which) {
	            case 13: 
	                $("#button").click();
	                break;
	        }
	    });
	});

	$(function(){
		if($("#search").val() != 0){
			$(".searchh #button").removeClass("icon");
			$(".searchh #button").addClass("icon2");
		}
		else{
			$(".searchh #button").removeClass("icon2");
			$(".searchh #button").addClass("icon");
		}
	});

	$("#search").on("input", function(){
		if($(this).val() != 0){
			$(".searchh #button").removeClass("icon");
			$(".searchh #button").addClass("icon2");
		}
		else{
			$(".searchh #button").removeClass("icon2");
			$(".searchh #button").addClass("icon");
		}
	});

});

