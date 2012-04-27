if(window.onload){
    window.other_onloads = window.onloads;
}

window.onload = function(){

    var url = document.getElementById("cfa_banner_script").getAttribute("src");
    var opts = {}

    if(url.split("?").length > 1){
        var pairs = url.split("?")[1].split("&");
        for(p in pairs){
            opts[pairs[p].split("=")[0]] = pairs[p].split("=")[1];
        }
    }

    opts.type = opts.type || "corner";
    if(opts.type == "corner"){
        var banner_div = document.createElement('div');
        banner_div.setAttribute("id", "cfa_corner_ribbon");
        banner_div.setAttribute("style", "position:absolute; width:150px; "+
                                "height:150px; top:0px; left:0px;z-index:100000; "+
                                "background:url(http://dthompson.github.com/cfa_banner/images/cfa_ribbon.png);");

        document.getElementsByTagName("body")[0].appendChild(banner_div);
    }else if(opts.type == "flag"){
        var banner_div = document.createElement('div');
        banner_div.setAttribute("id", "cfa_flag");
        banner_div.setAttribute("style", "position:absolute; width:238px; "+
                                "height:321px; top:-200px; right:100px;z-index:100000;cursor:pointer; "+
                                "background:url(http://dthompson.github.com/cfa_banner/images/cfa_flag.png); ");
        document.getElementsByTagName("body")[0].appendChild(banner_div);

        banner_div.addEventListener("mouseover", function(event){
            banner_div.style.top = "-180px";
        });
        banner_div.addEventListener("mouseout", function(event){
            banner_div.style.top = "-200px";
        });
        banner_div.addEventListener("click", function(event){
            var top = parseInt(banner_div.style.top);
            var direction = "down";
            if(top == 0)
                direction = "up"

            var movebanner = function(){
                var top = parseInt(banner_div.style.top);
                if(direction == "down"){
                    if(top < 0){
                        top +=5;
                        banner_div.style.top = top+"px";
                        setTimeout(movebanner, 10);
                    }
                }else{
                    if(top > -180){
                        top -=5;
                        banner_div.style.top = top+"px";
                        setTimeout(movebanner, 10);
                    }
                }
            };
            setTimeout(movebanner, 10);
        });
    }

    if(other_onloads)other_onloads();
}
