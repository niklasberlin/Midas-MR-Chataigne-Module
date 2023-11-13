// Vars

var myParameters = {};
var UseMeters;
var UpdateAll;
var meters1 = [
	"Chan1", "Chan2", "Chan3", "Chan4", "Chan5", "Chan6", "Chan7", "Chan8", "Chan9", "Chan10", "Chan11", "Chan12", "Chan13", "Chan14", "Chan15", "Chan16", 
	"Aux1", "Bus1", "Bus2", "Bus3", "Bus4", "Bus5", "Bus6", "FxSnd1", "FxSnd2", "FxSnd3", "FxSnd4", 
	"ST-L", "ST-R", "Mon1", "Mon2" ];


//  initial functions
function init() {
	
	infos=local.values.addContainer("Infos");
		infos.setCollapsed(true);	
		for (var i = 1; i<=10; i++) {
		infos.addStringParameter("Info "+(i), "","");}
		
	names=local.values.addContainer("Names");
		names.setCollapsed(true);	
		for (var i = 1; i<=16; i++) {
		names.addStringParameter("Track "+(i), "","");}
		names.addStringParameter("Aux USB", "","");
		for (var i = 1; i<=4; i++) {
		names.addStringParameter("FX Return "+(i), "","");}
		for (var i = 1; i<=6; i++) {
		names.addStringParameter("Bus "+(i), "","");}
		
	faders = local.values.faders.addContainer("Channel Faders");
		faders.setCollapsed(true);
		for (var i = 1; i<=16; i++) {
		faders.addFloatParameter("Fader "+(i), "", 0, 0, 1);}
		faders.addFloatParameter("Aux USB", "", 0, 0, 1);
		for (var i = 1; i<=4; i++) {
		faders.addFloatParameter("FX Return "+(i), "", 0, 0, 1);}
		
	faders = local.values.faders.addContainer("Bus DCA Faders");
		faders.setCollapsed(true);
		for (var i = 1; i<=6; i++) {
		faders.addFloatParameter("Bus "+(i), "", 0, 0, 1);}
		faders.addFloatParameter("Main LR", "", 0, 0, 1);
		for (var i = 1; i<=4; i++) {
		faders.addFloatParameter("DCA "+(i), "", 0, 0, 1);}
		
		
		for (var i = 1; i<=16; i++) {
	strips = local.values.channels.addContainer("Channel"+(i));
		var chan = local.values.channels.addContainer("Channel"+(i));
		chan.addIntParameter("Fader", "", 0, -90, 10);
		chan.addIntParameter("Pan", "", 0, -50,);
		chan.addBoolParameter("Mute", "", false);
		chan.addBoolParameter("EQ", "", false);
		chan.addBoolParameter("LoCut", "", false);
		chan.addBoolParameter("Dyn", "", false);
		chan.addBoolParameter("Gate", "", false);
		chan.setCollapsed(true);}
		
	strips = local.values.channels.addContainer("Main LR");
		var chan = local.values.channels.addContainer("Main LR");
		chan.addIntParameter("Fader", "", 0, -90, 10);
		chan.addIntParameter("Pan", "", 0, -50,);
		chan.addBoolParameter("Mute", "", false);
		chan.addBoolParameter("EQ", "", false);
		chan.addBoolParameter("Dyn", "", false);
		chan.setCollapsed(true);
		
		for (var i = 1; i<=6; i++) {
	strips = local.values.channels.addContainer("Bus"+(i));
		var chan = local.values.channels.addContainer("Bus"+(i));
		chan.addIntParameter("Fader", "", 0, -90, 10);
		chan.addBoolParameter("Mute", "", false);
		chan.addBoolParameter("EQ", "", false);
		chan.addBoolParameter("Dyn", "", false);
		chan.setCollapsed(true);}

//	Meters do not work yet !!		
/*  
	meters = local.values.addContainer("Meters");
		meters.setCollapsed(true);
		
		for (var i = 0; i < meters1.length; i++) {
		var n = meters1[i];
		var p = local.values.getChild("Meters").addFloatParameter(n,n,0,0,1); }
		
	UseMeters = local.values.addBoolParameter("Use Meters", "" , false);
*/
	UpdateAll = local.values.addTrigger("Click to update all", "Initiate and Update Values" , false);		
}

function moduleValueChanged(value) { 
 	if (value.name == "clickToUpdateAll"){ 
 		local.send("/xinfo");
		local.send("/status") ;
 		for(var i=1; i <10; i++) {
		local.send("/ch/0"+i+"/config/name");}
		for(var i=10; i <=16; i++) {
		local.send("/ch/"+i+"/config/name");}
		for(var i=1; i <=4; i++) {
		local.send("/rtn/"+i+"/config/name");}
		for(var i=1; i <=6; i++) {
		local.send("/bus/"+i+"/config/name");}  
		local.send("/rtn/aux/config/name"); 
		for(var i=1; i <10; i++) {
		local.send("/ch/0"+i+"/mix/fader");} 
		for(var i=10; i <=16; i++) {
		local.send("/ch/"+i+"/mix/fader");}
		for(var i=1; i <=4; i++) {
		local.send("/rtn/"+i+"/mix/fader");} 
		local.send("/rtn/aux/mix/fader");
		for(var i=1; i <6; i++) {
		local.send("/bus/"+i+"/mix/fader");} 
		local.send("/lr/mix/fader");
		for(var i=1; i <=4; i++) {
		local.send("/dca/"+i+"/fader");}
		for(var i=1; i <10; i++) {
		local.send("/ch/0"+i+"/mix/pan");} 
		for(var i=10; i <=16; i++) {
		local.send("/ch/"+i+"/mix/pan");}
		for(var i=1; i <10; i++) {
		local.send("/ch/0"+i+"/mix/on");} 
		for(var i=10; i <=16; i++) {
		local.send("/ch/"+i+"/mix/on");}
		for(var i=1; i <10; i++) {
		local.send("/ch/0"+i+"/eq/on");} 
		for(var i=10; i <=16; i++) {
		local.send("/ch/"+i+"/eq/on");}
		for(var i=1; i <10; i++) {
		local.send("/ch/0"+i+"/dyn/on");} 
		for(var i=10; i <=16; i++) {
		local.send("/ch/"+i+"/dyn/on");}
		for(var i=1; i <10; i++) {
		local.send("/ch/0"+i+"/gate/on");} 
		for(var i=10; i <=16; i++) {
		local.send("/ch/"+i+"/gate/on");}
		for(var i=1; i <10; i++) {
		local.send("/ch/0"+i+"/preamp/hpon");} 
		for(var i=10; i <=16; i++) {
		local.send("/ch/"+i+"/preamp/hpon");}		
		local.send("/lr/mix/fader");
		local.send("/lr/mix/pan");
		local.send("/lr/mix/on");
		local.send("/lr/eq/on");
		local.send("/lr/dyn/on");
		for(var i=1; i <=6; i++) {
		local.send("/bus/"+i+"/mix/fader");
		local.send("/bus/"+i+"/mix/on");
		local.send("/bus/"+i+"/eq/on");
		local.send("/bus/"+i+"/dyn/on");} 
	 } 
 }

// Xremote loop
function update(deltaTime) {
		var now = util.getTime();
		if(now > TSSendAlive) {
		TSSendAlive = now + 8;
		keepAlive(); }
}

function keepAlive() {
		local.send("/xremote") ;
// Meters do not work yet.... !!
//		if (UseMeters.get()) {
//		local.send("/meters", "/meters/1"); }
		
}

function oscEvent(address, args) { 
// infos
		if (address== "/xinfo"){ 
		local.values.infos.info1.set(address);
		for(var i=0; i <=3; i++) {
		var n=i+2 ; 
		local.values.infos.getChild('Info'+n).set(args[i]);}  }
		if (address== "/status"){ 
		for(var i=0; i < 3; i++) {
		var n=i+6 ; 
		local.values.infos.getChild('Info'+n).set(args[i]);}  }
// names
		for(var i=1; i <10; i++) {
		if (address == "/ch/0"+i+"/config/name") {
		local.values.names.getChild('Track'+i).set(args[0]);} }		
		for(var i=10; i <=18; i++) {
		if (address == "/ch/"+i+"/config/name") {
		local.values.names.getChild('Track'+i).set(args[0]);} }
		if (address == "/rtn/aux/config/name") {
		local.values.names.auxUSB.set(args[0]);}
		for(var i=1; i <=4; i++) {
		if (address == "/rtn/"+i+"/config/name") {
		local.values.names.getChild('fxReturn'+i).set(args[0]);} }
		for(var i=1; i <=6; i++) {
		if (address == "/bus/"+i+"/config/name") {
		local.values.names.getChild('Bus'+i).set(args[0]);} }	
// faders
		for(var i=1; i <10; i++) {
		if (address == "/ch/0"+i+"/mix/fader") {
		local.values.faders.channelFaders.getChild('Fader'+i).set(args[0]);} }		
		for(var i=10; i <=16; i++) {
		if (address == "/ch/"+i+"/mix/fader") {
		local.values.faders.channelFaders.getChild('Fader'+i).set(args[0]);} }
		
		for(var i=1; i <=4; i++) {
		if (address == "/rtn/"+i+"/mix/fader") {
		local.values.faders.channelFaders.getChild('fxReturn'+i).set(args[0]);} }
		
		if (address == "/rtn/aux/mix/fader") {
		local.values.faders.channelFaders.auxUSB.set(args[0]);}
		
		for(var i=1; i <=6; i++) {
		if (address == "/bus/"+i+"/mix/fader") {
		local.values.faders.busDCAFaders.getChild('Bus'+i).set(args[0]);} }
		if (address == "/lr/mix/fader") {
		local.values.faders.busDCAFaders.mainLR.set(args[0]);}	
		for(var i=1; i <=4; i++) {
		if (address == "/dca/"+i+"/fader") {
		local.values.faders.busDCAFaders.getChild('DCA'+i).set(args[0]);} }	
		
// CHANNELS
// Faders
		for(var i=1; i <10; i++) {
		if (address == "/ch/0"+i+"/mix/fader") {
		var f =args[0];	
		if (f >= 0.5) {var d=(f * 40)-30;}
		else if(f >=0.25) {var d=(f * 80)-50;}
		else if(f >=0.0625) {var d=(f * 160)-70;}
		else if (f >= 0.0) {var d=(f * 480)-90;}		
		local.values.channels.getChild('Channel'+i).getChild('Fader').set(d);} }
				
		for(var i=10; i <=16; i++) {
		if (address == "/ch/"+i+"/mix/fader") {
		var f =args[0];	
		if (f >= 0.5) {var d=(f * 40)-30;}
		else if(f >=0.25) {var d=(f * 80)-50;}
		else if(f >=0.0625) {var d=(f * 160)-70;}
		else if (f >= 0.0) {var d=(f * 480)-90;}
		local.values.channels.getChild('Channel'+i).getChild('Fader').set(d);} }
		
		if (address == "/lr/mix/fader") {
		var f =args[0];	
		if (f >= 0.5) {var d=(f * 40)-30;}
		else if(f >=0.25) {var d=(f * 80)-50;}
		else if(f >=0.0625) {var d=(f * 160)-70;}
		else if (f >= 0.0) {var d=(f * 480)-90;}
		local.values.channels.mainLR.fader.set(d);}
		
		for(var i=1; i <=6; i++) {
		if (address == "/bus/"+i+"/mix/fader") {
		var f =args[0];	
		if (f >= 0.5) {var d=(f * 40)-30;}
		else if(f >=0.25) {var d=(f * 80)-50;}
		else if(f >=0.0625) {var d=(f * 160)-70;}
		else if (f >= 0.0) {var d=(f * 480)-90;}		
		local.values.channels.getChild('Bus'+i).getChild('Fader').set(d);} }
		
//Pan	
		for(var i=1; i <10; i++) {
		if (address == "/ch/0"+i+"/mix/pan") {	
		var p = (args[0]*100-50);	
		local.values.channels.getChild('Channel'+i).getChild('Pan').set(p);} }		
		for(var i=10; i <=16; i++) {
		if (address == "/ch/"+i+"/mix/pan") {
		var p = (args[0]*100-50);
		local.values.channels.getChild('Channel'+i).getChild('Pan').set(p);} }
		if (address == "/lr/mix/pan") {
		var p = (args[0]*100-50);
		local.values.channels.mainLR.pan.set(p);}	
		
//Mute	
		for(var i=1; i <10; i++) {
		if (address == "/ch/0"+i+"/mix/on") {
		var on = 1-(args[0]);		
		local.values.channels.getChild('Channel'+i).getChild('Mute').set(on);} }		
		for(var i=10; i <=16; i++) {
		if (address == "/ch/"+i+"/mix/on") {
		var on = 1-(args[0]);
		local.values.channels.getChild('Channel'+i).getChild('Mute').set(on);} }
		if (address == "/lr/mix/on") {
		var on = 1-(args[0]);
		local.values.channels.mainLR.mute.set(1-args[0]);}
		for(var i=1; i <=6; i++) {
		if (address == "/bus/"+i+"/mix/on") {
		var on = 1-(args[0]);
		local.values.channels.getChild('Bus'+i).getChild('Mute').set(on);} }
		
//EQ
		for(var i=1; i <10; i++) {
		if (address == "/ch/0"+i+"/eq/on") {		
		local.values.channels.getChild('Channel'+i).getChild('EQ').set(args[0]);} }		
		for(var i=10; i <=16; i++) {
		if (address == "/ch/"+i+"/eq/on") {
		local.values.channels.getChild('Channel'+i).getChild('EQ').set(args[0]);} }
		if (address == "/lr/eq/on") {
		local.values.channels.mainLR.eq.set(args[0]);}
		for(var i=1; i <=6; i++) {
		if (address == "/bus/"+i+"/eq/on") {
		local.values.channels.getChild('Bus'+i).getChild('EQ').set(args[0]);} }
		
//LoCut
		for(var i=1; i <10; i++) {
		if (address == "/ch/0"+i+"/preamp/hpon") {		
		local.values.channels.getChild('Channel'+i).getChild('LoCut').set(args[0]);} }		
		for(var i=10; i <=16; i++) {
		if (address == "/ch/"+i+"/preamp/hpon") {
		local.values.channels.getChild('Channel'+i).getChild('LoCut').set(args[0]);} }	
		
//Dyn
		for(var i=1; i <10; i++) {
		if (address == "/ch/0"+i+"/dyn/on") {		
		local.values.channels.getChild('Channel'+i).getChild('Dyn').set(args[0]);} }		
		for(var i=10; i <=16; i++) {
		if (address == "/ch/"+i+"/dyn/on") {
		local.values.channels.getChild('Channel'+i).getChild('Dyn').set(args[0]);} }
		if (address == "/lr/dyn/on") {
		local.values.channels.mainLR.dyn.set(args[0]);}	
		for(var i=1; i <=6; i++) {
		if (address == "/bus/"+i+"/dyn/on") {
		local.values.channels.getChild('Bus'+i).getChild('Dyn').set(args[0]);} }
		
//Gate
		for(var i=1; i <10; i++) {
		if (address == "/ch/0"+i+"/gate/on") {		
		local.values.channels.getChild('Channel'+i).getChild('Gate').set(args[0]);} }		
		for(var i=10; i <=16; i++) {
		if (address == "/ch/"+i+"/gate/on") {
		local.values.channels.getChild('Channel'+i).getChild('Gate').set(args[0]);} }
		
// Meters ... this does not work yet !!
/*		if (address == "/meters/1") {
		for(var i=0; i < args.length; i++) {
			var data = args[i];
			var d = 1;
			for (var j = 4*d; j< data.length; j=j+4) {
				var index = parseInt(Math.floor(j/4))-1;
				if (index < meters1.length) {
					var f = bytesToFloat([data[j+0], data[j+1], data[j+2], data[j+3]]);
					var n = meters1[index];
					local.values.getChild("Meters").getChild(n).set(f); } } }
	} else {}	
*/		
}
/*
function bytesToFloat(bytes) {
   	 // JavaScript bitwise operators yield a 32 bits integer, not a float.
    // Assume LSB (least significant byte first).
    	var bits = bytes[3]<<24 ;//| bytes[2]<<16 | bytes[1]<<8 | bytes[0];
    	bits = bits | bytes[2]<<16;
    	bits = bits | bytes[1]<<8;
    	bits = bits | bytes[0];

    	var sign = (bits>>>31 === 0) ? 1.0 : -1.0;
    	var e = bits>>>23 & 0xff;
    	var m = (e === 0) ? (bits & 0x7fffff)<<1 : (bits & 0x7fffff) | 0x800000;
    	var f = sign * m * Math.pow(2, e - 150);
    	return f;
  }
*/
// Requests
function request_names() {
 		for(var i=1; i <10; i++) {
		local.send("/ch/0"+i+"/config/name");}
		for(var i=10; i <=16; i++) {
		local.send("/ch/"+i+"/config/name");}
		for(var i=1; i <=4; i++) {
		local.send("/rtn/"+i+"/config/name");} 
		local.send("/rtn/aux/config/name");  		 
}

function request_chfader() {
 		for(var i=1; i <10; i++) {
		local.send("/ch/0"+i+"/mix/fader");} 
		for(var i=10; i <=16; i++) {
		local.send("/ch/"+i+"/mix/fader");}
		for(var i=1; i <=4; i++) {
		local.send("/rtn/"+i+"/mix/fader");} 
		local.send("/rtn/aux/mix/fader"); 		
}

function request_busfader() {
 		for(var i=1; i <6; i++) {
		local.send("/bus/"+i+"/mix/fader");} 
		local.send("/lr/mix/fader");
		for(var i=1; i <=4; i++) {
		local.send("/dca/"+i+"/fader");}
}

function request_all() {
 		for(var i=1; i <10; i++) {
		local.send("/ch/0"+i+"/config/name");}
		for(var i=10; i <=16; i++) {
		local.send("/ch/"+i+"/config/name");}
		for(var i=1; i <=4; i++) {
		local.send("/rtn/"+i+"/config/name");} 
		local.send("/rtn/aux/config/name"); 
		for(var i=1; i <10; i++) {
		local.send("/ch/0"+i+"/mix/fader");} 
		for(var i=10; i <=16; i++) {
		local.send("/ch/"+i+"/mix/fader");}
		for(var i=1; i <=4; i++) {
		local.send("/rtn/"+i+"/mix/fader");} 
		local.send("/rtn/aux/mix/fader");
		for(var i=1; i <6; i++) {
		local.send("/bus/"+i+"/mix/fader");} 
		local.send("/lr/mix/fader");
		for(var i=1; i <=4; i++) {
		local.send("/dca/"+i+"/fader");}
		for(var i=1; i <10; i++) {
		local.send("/ch/0"+i+"/mix/pan");} 
		for(var i=10; i <=16; i++) {
		local.send("/ch/"+i+"/mix/pan");}
		for(var i=1; i <10; i++) {
		local.send("/ch/0"+i+"/mix/on");} 
		for(var i=10; i <=16; i++) {
		local.send("/ch/"+i+"/mix/on");}
		for(var i=1; i <10; i++) {
		local.send("/ch/0"+i+"/eq/on");} 
		for(var i=10; i <=16; i++) {
		local.send("/ch/"+i+"/eq/on");}
		for(var i=1; i <10; i++) {
		local.send("/ch/0"+i+"/dyn/on");} 
		for(var i=10; i <=16; i++) {
		local.send("/ch/"+i+"/dyn/on");}
		for(var i=1; i <10; i++) {
		local.send("/ch/0"+i+"/gate/on");} 
		for(var i=10; i <=16; i++) {
		local.send("/ch/"+i+"/gate/on");}
		for(var i=1; i <10; i++) {
		local.send("/ch/0"+i+"/preamp/hpon");} 
		for(var i=10; i <=16; i++) {
		local.send("/ch/"+i+"/preamp/hpon");}  		 
}

// Regular Functions
//  Chan Config

function config_name(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/config/name", val); 
}

function config_color(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/config/color", val);
}

function channel_source(targetNumber, val) {
	
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } 
	local.send("/ch/"+targetNumber+"/config/insrc", val);
}

//  Channel Actions

function ch_automix_group(targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } 
	local.send("/ch/"+targetNumber+"/automix/group", val);
}

function ch_automix_gain(targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } 
	
	local.send("/ch/"+targetNumber+"/automix/weight", val);
}



//  Preamp

function preamp_gain(targetType, targetNumber, val) {
	
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/headamp/"+targetNumber+"/gain", val);
}

function auxin_trim(targetType, targetNumber, val) {
	
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/rtn/aux/preamp /rtntrim", val);
}

function preamp_invert(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/preamp/invert", val);
}

//  Channel

function mix_fader(targetType, targetNumber, val) {
	
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }	
	if (targetType == "dca"){local.send("/"+targetType+"/"+targetNumber+"/fader", val);} else
	{if (targetType == "rtn/aux")
	{local.send("/"+targetType+"/mix/fader", val);} else
	{local.send("/"+targetType+"/"+targetNumber+"/mix/fader", val);}}
}


function mix_on(targetType, targetNumber, val) {
	val=1-val ;
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }	
	if (targetType == "dca"){local.send("/"+targetType+"/"+targetNumber+"/on", val);} else
	{if (targetType == "rtn/aux")
	{local.send("/"+targetType+"/mix/on", val); } else
	{local.send("/"+targetType+"/"+targetNumber+"/mix/on", val);}}
}

function mix_st(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }	
	{if (targetType == "rtn/aux")
	{local.send("/"+targetType+"/mix/lr", val);} else
	{local.send("/"+targetType+"/"+targetNumber+"/mix/lr", val);}}	
}

function mix_pan(targetType, targetNumber, val) {
	
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }	
	{if (targetType == "rtn/aux")
	{local.send("/"+targetType+"/mix/pan", val);} else
	{local.send("/"+targetType+"/"+targetNumber+"/mix/pan", val);} }
}

function ch_solo(targetNumber, val) {
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } 	
	local.send("/-stat/solosw/"+targetNumber, val);
}

function mix_send_level(targetType, targetNumber, mix, val) {
	
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	if (mix < 10) {mix = "0"+mix; } 
	{if (targetType == "rtn/aux")
	{local.send("/"+targetType+"/mix/"+mix+"/level", val);} else
	{local.send("/"+targetType+"/"+targetNumber+"/mix/"+mix+"/level", val); } }
}

//  Gate
function gate_on(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/gate/on", val);
}

function gate_mode(targetType, targetNumber, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/gate/mode", val);
}

function gate_thr(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	
	local.send("/"+targetType+"/"+targetNumber+"/gate/thr", val);
}

function gate_range(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	
	local.send("/"+targetType+"/"+targetNumber+"/gate/range", val);
}

function gate_attack(targetType, targetNumber, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	
	local.send("/"+targetType+"/"+targetNumber+"/gate/attack", val);
}

function gate_hold(targetType, targetNumber, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/gate/hold", val);
}

function gate_release(targetType, targetNumber, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/gate/release", val);
}

function gate_keysrc(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/gate/keysrc", val);
}

function gate_filter_on(targetType, targetNumber, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/gate/filter/on", val);
}

function gate_filter_type(targetType, targetNumber, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/gate/filter/type", val);
}

function gate_filter_f(targetType, targetNumber, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/gate/filter/f", val);
}

function gate_keysrc(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/gate/keysrc", val);
}

//  Compressor

function ch_comp_full(targetType, targetNumber, val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13 ) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/on", val1);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/mode", val2);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/det", val3);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/env", val4);	
	local.send("/"+targetType+"/"+targetNumber+"/dyn/thr", val5);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/ratio", val6);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/knee", val7);	
	local.send("/"+targetType+"/"+targetNumber+"/dyn/mgain", val8);	
	local.send("/"+targetType+"/"+targetNumber+"/dyn/attack", val9);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/hold", val10);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/release", val11);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/mix", val12);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/auto", val13);
}

function comp_reset(targetType, targetNumber, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/keysrc", val);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/on", 0);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/mode", 0);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/det", 0);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/env", 1);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/thr", 1.0);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/ratio", 0);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/knee", 1);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/attack", 0.085);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/hold", 0.545);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/release", 0.51);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/mix", 1.0);
	local.send("/"+targetType+"/"+targetNumber+"/dyn/auto", 0);
}


function dyn_on(targetType, targetNumber, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/on", val);
}

function dyn_mode(targetType, targetNumber, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/mode", val);
}

function dyn_det(targetType, targetNumber, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/det", val);
}

function dyn_env(targetType, targetNumber, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/env", val);
}

function dyn_thr(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	
	local.send("/"+targetType+"/"+targetNumber+"/dyn/thr", val);
}

function dyn_ratio(targetType, targetNumber, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/ratio", val);
}

function dyn_knee(targetType, targetNumber, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/knee", val);
}

function dyn_mgain(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	
	local.send("/"+targetType+"/"+targetNumber+"/dyn/mgain", val);
}

function dyn_attack(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	
	local.send("/"+targetType+"/"+targetNumber+"/dyn/attack", val);
}

function dyn_hold(targetType, targetNumber, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/hold", val);
}

function dyn_release(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/release", val);
}

function dyn_pos(targetType, targetNumber, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/pos", val);
}

function dyn_keysrc(targetType, targetNumber, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/keysrc", val);
}

function dyn_mix(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	
	local.send("/"+targetType+"/"+targetNumber+"/dyn/mix", val);
}

function dyn_auto(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/auto", val);
}

function dyn_filter_on(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/filter/on", val);
}

function dyn_filter_type(targetType, targetNumber, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/filter/type", val);
}

function dyn_filter_f(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/filter/f", val);
}

function comp_keysrc(targetType, targetNumber, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/dyn/keysrc", val);
}

//  Insert

function insert_on(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/insert/on", val);
}

function insert_pos(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/insert/pos", val);
}

function insert_sel(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/insert/fxslot", val);
}

//  EQ

function full_ch_eq (targetType, targetNumber, val, val1, band, val2, val3, val4, val5) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	
	val4=1-val4 ;
	local.send("/"+targetType+"/"+targetNumber+"/eq/on", val1);
	local.send("/"+targetType+"/"+targetNumber+"/eq/"+band+"/g", val2);
	local.send("/"+targetType+"/"+targetNumber+"/eq/"+band+"/f", val3);
	local.send("/"+targetType+"/"+targetNumber+"/eq/"+band+"/q", val4);
	local.send("/"+targetType+"/"+targetNumber+"/eq/"+band+"/type", val5);
}

function ch_eq_reset(targetType, targetNumber) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/eq/1/g", 0.5);
	local.send("/"+targetType+"/"+targetNumber+"/eq/2/g", 0.5);
	local.send("/"+targetType+"/"+targetNumber+"/eq/3/g", 0.5);
	local.send("/"+targetType+"/"+targetNumber+"/eq/4/g", 0.5);
	local.send("/"+targetType+"/"+targetNumber+"/eq/5/g", 0.5);
	local.send("/"+targetType+"/"+targetNumber+"/eq/6/g", 0.5);
	local.send("/"+targetType+"/"+targetNumber+"/eq/1/f", 0.2);
	local.send("/"+targetType+"/"+targetNumber+"/eq/2/f", 0.4);
	local.send("/"+targetType+"/"+targetNumber+"/eq/3/f", 0.5);
	local.send("/"+targetType+"/"+targetNumber+"/eq/4/f", 0.8);
	local.send("/"+targetType+"/"+targetNumber+"/eq/5/f", 0.85);
	local.send("/"+targetType+"/"+targetNumber+"/eq/6/f", 0.9);
}

function eq_on(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/eq/on", val);
}

function eq_type(targetType, targetNumber, band, val) { 
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; }
	local.send("/"+targetType+"/"+targetNumber+"/eq/"+band+"/type", val);
}

function eq_f(targetType, targetNumber, band, val) { 
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/eq/"+band+"/f", val);
}

function eq_g(targetType, targetNumber, band, val) { 
	Val = 1-val ;
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/eq/"+band+"/g", val);
}

function eq_q(targetType, targetNumber, band, val) {
	val = 1-val ;  
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/eq/"+band+"/q", val);
}

// Hi-Pass

function hipass (targetType, targetNumber, val1, val2) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/preamp/hpon", val1);
	local.send("/"+targetType+"/"+targetNumber+"/preamp/hpf", val2);
}

function preamp_hpon(targetType, targetNumber, val) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/preamp/hpon", val);
}

function preamp_hpf(targetType, targetNumber, val) {
	
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/"+targetType+"/"+targetNumber+"/preamp/hpf", val);
}

//  LR-Channel
function lr_fader(targetType, val) { 
	
	local.send("/"+targetType+"/mix/fader", val);
}

function lr_on(targetType, val) {
	val=1-val;
	local.send("/"+targetType+"/mix/on", val);
}

function lr_pan(targetType,val) {

	local.send("/"+targetType+"/mix/pan", val);
}

function lr_eq (val1,targetType,  val, band, val2, val3, val4, val5) {
	
	val4=1-val4 ;
	local.send("/"+targetType+"/eq/on", val1);
	local.send("/"+targetType+"/eq/"+band+"/g", val2);
	local.send("/"+targetType+"/eq/"+band+"/f", val3);
	local.send("/"+targetType+"/eq/"+band+"/q", val4);
	local.send("/"+targetType+"/eq/"+band+"/type", val5);
}

function lr_eq_reset(targetType, targetNumber) {
	if (targetType == "ch"){
	if (targetNumber < 10) {targetNumber = "0"+targetNumber; } }
	local.send("/lr/eq/1/g", 0.5);
	local.send("/lr/eq/2/g", 0.5);
	local.send("/lr/eq/3/g", 0.5);
	local.send("/lr/eq/4/g", 0.5);
	local.send("/lr/eq/5/g", 0.5);
	local.send("/lr/eq/6/g", 0.5);
	local.send("/lr/eq/1/f", 0.2);
	local.send("/lr/eq/2/f", 0.4);
	local.send("/lr/eq/3/f", 0.5);
	local.send("/lr/eq/4/f", 0.8);
	local.send("/lr/eq/5/f", 0.85);
	local.send("/lr/eq/6/f", 0.9);
}

function lr_eq_on(targetType, val) {
	local.send("/"+targetType+"/eq/on", val);
}

function lr_comp(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13 ) {
	local.send("/lr/dyn/on", val1);
	local.send("/lr/dyn/mode", val2);
	local.send("/lr/dyn/det", val3);
	local.send("/lr/dyn/env", val4);
	
	local.send("/lr/dyn/thr", val5);
	local.send("/lr/dyn/ratio", val6);
	local.send("/lr/dyn/knee", val7);
	
	local.send("/lr/dyn/mgain", val8);
	
	local.send("/lr/dyn/attack", val9);
	local.send("/lr/dyn/hold", val10);
	local.send("/lr/dyn/release", val11);
	
	local.send("/lr/dyn/mix", val12);
	local.send("/lr/dyn/auto", val13);
	
}

function lr_comp_reset() {
	local.send("/lr/dyn/on", 0);
	local.send("/lr/dyn/mode", 0);
	local.send("/lr/dyn/det", 0);
	local.send("/lr/dyn/env", 1);
	local.send("/lr/dyn/thr", 1.0);
	local.send("/lr/dyn/ratio", 0);
	local.send("/lr/dyn/knee", 1);
	local.send("/lr/dyn/mgain", 0.0);
	local.send("/lr/dyn/attack", 0.085);
	local.send("/lr/dyn/hold", 0.545);
	local.send("/lr/dyn/release", 0.51);
	local.send("/lr/dyn/mix", 1.0);
	local.send("/lr/dyn/auto", 0);
	
}

function lr_eq_f(targetType, band, val) { 
	local.send("/"+targetType+"/eq/"+band+"/f", val);
}

function lr_eq_g(targetType, band, val) {
	 
	local.send("/"+targetType+"/eq/"+band+"/g", val);
}

function lr_eq_q(targetType, band, val) {
	val=1-val ;
	local.send("/"+targetType+"/eq/"+band+"/q", val);
}

function lr_eq_type(targetType, band, val) { 
	local.send("/"+targetType+"/eq/"+band+"/type", val);
}



function lr_dyn_filter_on(targetType, val) {	
	local.send("/"+targetType+"/dyn/filter/on", val);
}

function lr_dyn_filter_type(targetType, val) { 	
	local.send("/"+targetType+"/dyn/filter/type", val);
}

function lr_dyn_filter_f(targetType, val) {
	local.send("/"+targetType+"/dyn/filter/f", val);
}

function lr_comp_keysrc(targetType, val) { 
	local.send("/"+targetType+"/dyn/keysrc", val);
}

//Player

function player_actions (val) {
	local.send("/-stat/tape/state", val);
}

function player_next (val) {
	local.send("/-prefs/playnext", val);
}

function player_mode (val) {
	local.send("/-prefs/usbifcmode", val);
}

//Divers

function Snap_load (val) {
	local.send("/-snap/load", val);
}

function Snap_save (val) {
	local.send("/-snap/save", val);
}

function mute_group (group, val) {
	local.send("/config/mute/"+group+"", val);
}

function solo_level (target, val) { 
	
	local.send("/config/"+target+"/level", val);
}

function xinfo () { 
	
	local.send("/xinfo");
}
