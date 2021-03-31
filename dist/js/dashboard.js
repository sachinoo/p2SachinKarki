window.onload = function() {
    var tens = 00;
    var appendTens = document.getElementById("kmhSpeed");
    var Interval;

    // Audio
    var startAuto = new Audio("dist/sound/startengine.wav");
    var idling = new Audio("dist/sound/idling.wav");
    var acceleration = new Audio("dist/sound/acceleration.wav");
    var accLongDown = new Audio("dist/sound/accLongDown.wav");
    var accelerationNeutral = new Audio("dist/sound/accNeutral.wav");
    var accelerationDown = new Audio("dist/sound/accDown.wav");
    var engineOff = new Audio("dist/sound/off.wav");
    var overGas = new Audio("dist/sound/overGas.wav");
    var turnIndicator = new Audio("dist/sound/turnIndicator.wav");
    var gearSelect = new Audio("dist/sound/gearSelect.wav");
    var startSignal = new Audio("dist/sound/signal/startSignal.wav");
    var signalLong = new Audio("dist/sound/signal/signal.wav");
    var endSignal = new Audio("dist/sound/signal/endSignal.wav");

    startAuto.volume = 0.2;
    accLongDown.volume = 0.3;



    signal.onmousedown = function() {
        startSignal.play();
        setTimeout(function() {
            signalLong.load();
            signalLong.play();
        }, 90);
    }

    signal.onmouseup = function() {
        setTimeout(function() {
            signalLong.pause();
        }, 200);
        endSignal.play();
    }

    gasReleased.onmousedown = function() {
        if (startEngineButton.checked && e.checked) {
            clearInterval(Interval);
            Interval = setInterval(startTimer, 20);
            acceleration.muted = false;
            accLongDown.muted = true;
            acceleration.play();
            setTimeout(function() {
                idling.muted = true;
            }, 300);
        } else if (startEngineButton.checked && e.checked === false) {
            accelerationNeutral.load();
            accelerationNeutral.play();
            // accelerationNeutral.muted = false;
            clearInterval(Interval);
            Interval = setInterval(neutralGasUp, 300);
            setTimeout(function() {
                idling.muted = true;
            }, 300);
        }
        gasReleased.style.transform = "rotateX(35deg)";
    }

    gasReleased.onmouseup = function() {
        if (startEngineButton.checked && e.checked || e.checked === false) {
            clearInterval(Interval);
            Interval = setInterval(startTimerInvert, 200);
            setTimeout(function() {
                acceleration.pause();
            }, 300);
            overGas.muted = true;
            overGas.loop = false;
            accLongDown.muted = false;
        }

        if (startEngineButton.checked && overGas.muted === true && idling.muted === true && e.checked) {
            accLongDown.load();
            accLongDown.play();
            accLongDown.loop = true;
        }

        if (startEngineButton.checked && e.checked === false) {
            setTimeout(function() {
                accelerationNeutral.pause();
            }, 200);
            clearInterval(Interval);
            Interval = setInterval(neutralGasDown, 5);
            accelerationDown.load();
            accelerationDown.play();
            setTimeout(function() {
                idling.muted = false;
            }, 1200);
        }

        gasReleased.style.transform = "none";
    }

    brake.onmousedown = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimerInvert, 15);
        brake.style.transform = "rotateX(35deg)";
        accLongDown.playbackRate = 2;
    }

    brake.onmouseup = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimerInvert, 300);
        brake.style.transform = "none";
    }

    startEngine.onclick = function() {
        if (startEngineButton.checked && tens === 0) {
            clearInterval(Interval);
            Interval = setInterval(start, 10);
            startAuto.play();
            setTimeout(function() {
                idling.play();
                idling.loop = true;
                idling.muted = false;
            }, 1000);

        } else {
            engineOff.volume = 0.2;

            shutDown();
            if (tens <= 5) {
                engineOff.play();
                setTimeout(function() {
                    idling.loop = false
                    idling.load();
                }, 200);
            }
        }
    }

    leftIndi.onclick = function() {
        if (rightIndi.checked) {
            rightIndi.checked = false;
            rightIndicator.style.visibility = "hidden";
        }
        if (leftIndi.checked) {
            leftIndicator.style.visibility = "visible";
            turnIndicator.play();
            turnIndicator.loop = true;
        } else {
            leftIndicator.style.visibility = "hidden";
            turnIndicator.pause();
            turnIndicator.loop = false;
        }
    }

    rightIndi.onclick = function() {
        if (leftIndi.checked) {
            leftIndi.checked = false;
            leftIndicator.style.visibility = "hidden";

        }
        if (rightIndi.checked) {
            rightIndicator.style.visibility = "visible";
            turnIndicator.play();
            turnIndicator.loop = true;
        } else {
            rightIndicator.style.visibility = "hidden";
            turnIndicator.pause();
            turnIndicator.loop = false;
        }
    }

    e.onclick = function() {
        gearSelect.play();
        gearSelect.volume = 0.4;
    }

    function neutralGas() {
        if (startEngineButton.checked && e.checked === false) {

        }
    }

    function tkmIndicator() {
        if (tens > 0) {
            tkmIndication1.style.visibility = "visible";
        }

        if (tens > 10) {
            tkmIndication2.style.visibility = "visible";
        }

        if (tens > 15) {
            tkmIndication3.style.visibility = "visible";
        }

        if (tens > 30) {
            tkmIndication4.style.visibility = "visible";
        }

        if (tens > 32) {
            tkmIndication4.style.visibility = "hidden";
        }

        if (tens > 36) {
            tkmIndication3.style.visibility = "hidden";
        }

        if (tens > 40) {
            tkmIndication2.style.visibility = "hidden";
        }

        if (tens > 45) {
            tkmIndication2.style.visibility = "visible";
        }

        if (tens > 65) {
            tkmIndication3.style.visibility = "visible";
        }

        if (tens > 70) {
            tkmIndication4.style.visibility = "visible";
        }

        //

        if (tens > 90) {
            tkmIndication4.style.visibility = "hidden";
        }

        if (tens > 94) {
            tkmIndication3.style.visibility = "hidden";
        }

        if (tens > 98) {
            tkmIndication2.style.visibility = "hidden";
        }

        if (tens > 102) {
            tkmIndication2.style.visibility = "visible";
        }

        if (tens > 108) {
            tkmIndication3.style.visibility = "visible";
        }

        if (tens > 112) {
            tkmIndication4.style.visibility = "visible";
        }

        if (tens > 130) {
            tkmIndication5.style.visibility = "visible";
        }

        //

        if (tens > 147) {
            tkmIndication5.style.visibility = "hidden";
        }

        if (tens > 150) {
            tkmIndication4.style.visibility = "hidden";
        }

        if (tens > 153) {
            tkmIndication3.style.visibility = "hidden";
        }

        if (tens > 156) {
            tkmIndication2.style.visibility = "hidden";
        }

        if (tens > 158) {
            tkmIndication2.style.visibility = "visible";
        }

        if (tens > 162) {
            tkmIndication3.style.visibility = "visible";
        }

        if (tens > 166) {
            tkmIndication4.style.visibility = "visible";
        }

        if (tens > 170) {
            tkmIndication5.style.visibility = "visible";
        }

        //

        if (tens > 200) {
            tkmIndication5.style.visibility = "hidden";
        }

        if (tens > 201) {
            tkmIndication4.style.visibility = "hidden";
        }

        if (tens > 202) {
            tkmIndication3.style.visibility = "hidden";
        }

        if (tens > 203) {
            tkmIndication2.style.visibility = "hidden";
        }

        if (tens > 204) {
            tkmIndication2.style.visibility = "visible";
        }

        if (tens > 205) {
            tkmIndication3.style.visibility = "visible";
        }

        if (tens > 206) {
            tkmIndication4.style.visibility = "visible";
        }

        if (tens > 207) {
            tkmIndication5.style.visibility = "visible";
        }

        //

        if (tens > 220) {
            tkmIndication5.style.visibility = "hidden";
        }

        if (tens > 221) {
            tkmIndication4.style.visibility = "hidden";
        }

        if (tens > 222) {
            tkmIndication3.style.visibility = "hidden";
        }

        if (tens > 223) {
            tkmIndication2.style.visibility = "hidden";
        }

        if (tens > 224) {
            tkmIndication2.style.visibility = "visible";
        }

        if (tens > 225) {
            tkmIndication3.style.visibility = "visible";
        }

        if (tens > 226) {
            tkmIndication4.style.visibility = "visible";
        }

        if (tens > 227) {
            tkmIndication5.style.visibility = "visible";
        }

        if (tens > 228) {
            tkmIndication6.style.visibility = "visible";
        }

        if (tens > 232) {
            tkmIndication7.style.visibility = "visible";
        }
    }

    function tkmIndicatorInvert() {
        if (tens < 0) {
            tkmIndication1.style.visibility = "hidden";
        }

        if (tens < 10) {
            tkmIndication2.style.visibility = "hidden";
        }

        if (tens < 15 || tens < 100) {
            tkmIndication3.style.visibility = "hidden";
        }

        if (tens < 30 || tens < 130) {
            tkmIndication4.style.visibility = "hidden";
        }

        if (tens < 60 || tens < 160) {
            tkmIndication5.style.visibility = "hidden";
        }

        if (tens < 90 || tens < 190) {
            tkmIndication6.style.visibility = "hidden";
        }

        if (tens < 120 || tens < 220) {
            tkmIndication7.style.visibility = "hidden";
        }

    }

    function tensMoreFifty() {
        //lignt green

        if (tens === 0) {
            lightGreen1.style.visibility = "visible";
            lightGreen1.style.backgroundColor = "#00ff27";
        }

        if (tens === 5) {
            lightGreen2.style.visibility = "visible";
            lightGreen2.style.backgroundColor = "#00ff27";
        }

        if (tens === 10) {
            lightGreen3.style.visibility = "visible";
            lightGreen3.style.backgroundColor = "#00ff27";
        }

        if (tens === 15) {
            lightGreen4.style.visibility = "visible";
            lightGreen4.style.backgroundColor = "#00ff27";
        }

        if (tens === 20) {
            lightGreen5.style.visibility = "visible";
            lightGreen5.style.backgroundColor = "#00ff27";
        }

        if (tens === 25) {
            lightGreen6.style.visibility = "visible";
            lightGreen6.style.backgroundColor = "#00ff27";
        }

        if (tens === 30) {
            lightGreen7.style.visibility = "visible";
            lightGreen7.style.backgroundColor = "#00ff27";
        }

        if (tens === 35) {
            lightGreen8.style.visibility = "visible";
            lightGreen8.style.backgroundColor = "#00ff27";
        }

        //Dark green

        if (tens === 40) {
            darkGreen1.style.visibility = "visible";
            darkGreen1.style.backgroundColor = "#427a4b";
        }

        if (tens === 45) {
            darkGreen2.style.visibility = "visible";
            darkGreen2.style.backgroundColor = "#427a4b";
        }

        if (tens === 50) {
            darkGreen3.style.visibility = "visible";
            darkGreen3.style.backgroundColor = "#427a4b";
            thermoSquare.style.left = "48px";
        }

        if (tens === 55) {
            darkGreen4.style.visibility = "visible";
            darkGreen4.style.backgroundColor = "#427a4b";
        }

        if (tens === 60) {
            darkGreen5.style.visibility = "visible";
            darkGreen5.style.backgroundColor = "#427a4b";
        }

        if (tens === 65) {
            darkGreen6.style.visibility = "visible";
            darkGreen6.style.backgroundColor = "#427a4b";
        }

        if (tens === 70) {
            darkGreen7.style.visibility = "visible";
            darkGreen7.style.backgroundColor = "#427a4b";
        }

        if (tens === 75) {
            darkGreen8.style.visibility = "visible";
            darkGreen8.style.backgroundColor = "#427a4b";
        }

        if (tens === 80) {
            darkGreen9.style.visibility = "visible";
            darkGreen9.style.backgroundColor = "#427a4b";
        }

        //Ligh yellow

        if (tens === 85) {
            lightYellow1.style.visibility = "visible";
            lightYellow1.style.backgroundColor = "#d7d700";
        }

        if (tens === 90) {
            lightYellow2.style.visibility = "visible";
            lightYellow2.style.backgroundColor = "#d7d700";
        }

        if (tens === 95) {
            lightYellow3.style.visibility = "visible";
            lightYellow3.style.backgroundColor = "#d7d700";
        }

        if (tens === 100) {
            lightYellow4.style.visibility = "visible";
            lightYellow4.style.backgroundColor = "#d7d700";
        }

        if (tens === 105) {
            lightYellow5.style.visibility = "visible";
            lightYellow5.style.backgroundColor = "#d7d700";
        }

        if (tens === 110) {
            lightYellow6.style.visibility = "visible";
            lightYellow6.style.backgroundColor = "#d7d700";
        }

        if (tens === 115) {
            lightYellow7.style.visibility = "visible";
            lightYellow7.style.backgroundColor = "#d7d700";
        }

        if (tens === 120) {
            lightYellow8.style.visibility = "visible";
            lightYellow8.style.backgroundColor = "#d7d700";
        }

        //Dark yellow

        if (tens === 125) {
            darkYellow1.style.visibility = "visible";
            darkYellow1.style.backgroundColor = "#f99c11";
        }

        if (tens === 130) {
            darkYellow2.style.visibility = "visible";
            darkYellow2.style.backgroundColor = "#f99c11";
        }

        if (tens === 135) {
            darkYellow3.style.visibility = "visible";
            darkYellow3.style.backgroundColor = "#f99c11";
        }

        if (tens === 140) {
            darkYellow4.style.visibility = "visible";
            darkYellow4.style.backgroundColor = "#f99c11";
        }

        if (tens === 145) {
            darkYellow5.style.visibility = "visible";
            darkYellow5.style.backgroundColor = "#f99c11";
        }

        if (tens === 150) {
            darkYellow6.style.visibility = "visible";
            darkYellow6.style.backgroundColor = "#f99c11";
        }

        if (tens === 155) {
            darkYellow7.style.visibility = "visible";
            darkYellow7.style.backgroundColor = "#f99c11";
        }

        if (tens === 160) {
            darkYellow8.style.visibility = "visible";
            darkYellow8.style.backgroundColor = "#f99c11";
        }

        if (tens === 165) {
            darkYellow9.style.visibility = "visible";
            darkYellow9.style.backgroundColor = "#f99c11";
        }

        // Dark red

        if (tens === 170) {
            darkRed1.style.visibility = "visible";
            darkRed1.style.backgroundColor = "#f53131";
        }

        if (tens === 175) {
            darkRed2.style.visibility = "visible";
            darkRed2.style.backgroundColor = "#f53131";
        }

        if (tens === 180) {
            darkRed3.style.visibility = "visible";
            darkRed3.style.backgroundColor = "#f53131";
        }

        if (tens === 185) {
            darkRed4.style.visibility = "visible";
            darkRed4.style.backgroundColor = "#f53131";
        }

        if (tens === 190) {
            darkRed5.style.visibility = "visible";
            darkRed5.style.backgroundColor = "#f53131";
        }

        if (tens === 195) {
            darkRed6.style.visibility = "visible";
            darkRed6.style.backgroundColor = "#f53131";
        }

        if (tens === 200) {
            darkRed7.style.visibility = "visible";
            darkRed7.style.backgroundColor = "#f53131";
            thermoSquare.style.left = "62px";
        }

        if (tens === 205) {
            darkRed8.style.visibility = "visible";
            darkRed8.style.backgroundColor = "#f53131";
        }

        if (tens === 210) {
            darkRed9.style.visibility = "visible";
            darkRed9.style.backgroundColor = "#f53131";
        }

        // Midnight blue

        if (tens === 215) {
            midnightBlue1.style.visibility = "visible";
            midnightBlue1.style.backgroundColor = "#0c003b";
        }

        if (tens === 220) {
            midnightBlue2.style.visibility = "visible";
            midnightBlue2.style.backgroundColor = "#0c003b";
        }

        if (tens === 225) {
            midnightBlue3.style.visibility = "visible";
            midnightBlue3.style.backgroundColor = "#0c003b";
        }

        if (tens === 230) {
            midnightBlue4.style.visibility = "visible";
            midnightBlue4.style.backgroundColor = "#0c003b";
        }

        if (tens === 235) {
            midnightBlue5.style.visibility = "visible";
            midnightBlue5.style.backgroundColor = "#0c003b";
        }

        if (tens === 240) {
            midnightBlue6.style.visibility = "visible";
            midnightBlue6.style.backgroundColor = "#0c003b";
            overGas.muted = false;
            overGas.play();
            overGas.loop = true;
            setTimeout(function() {
                acceleration.muted = true;
            }, 300);
        }

        // Lines end
    }

    function tensMoreHunderd() {
        if (tens > 1) {
            clearInterval(Interval);
            Interval = setInterval(startTimer, 20);
            appendTens.innerHTML = tens;
        }

        if (tens > 50) {
            clearInterval(Interval);
            Interval = setInterval(startTimer, 40);
            appendTens.innerHTML = tens;
        }

        if (tens > 100) {
            clearInterval(Interval);
            Interval = setInterval(startTimer, 80);
            appendTens.innerHTML = tens;
        }
    }

    function tensMoreTwoHunderd() {
        if (tens > 200) {
            clearInterval(Interval);
            Interval = setInterval(startTimer, 110);
            appendTens.innerHTML = tens;
        }
    }

    function tensMoreTwoHunderdTen() {
        if (tens > 210) {
            clearInterval(Interval);
            Interval = setInterval(startTimer, 200);
            appendTens.innerHTML = tens;
        }
    }

    function tensMoreTwoHunderdTwenty() {
        if (tens > 220) {
            clearInterval(Interval);
            Interval = setInterval(startTimer, 500);
            appendTens.innerHTML = tens;
        }
    }

    function tensMoreTwoHunderdThirty() {
        if (tens > 230) {
            clearInterval(Interval);
            Interval = setInterval(startTimer, 700);
            appendTens.innerHTML = tens;
        }
    }

    function tensLessTen() {
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
    }

    function tensMoreTen() {
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
    }

    function tensDiscending() {
        // if (tens < 0) { lightGreen1.style.visibility = "hidden"; }

        // if (tens < 5) { lightGreen2.style.visibility = "hidden"; }

        if (tens < 10) {
            lightGreen3.style.visibility = "hidden";
        }

        if (tens < 15) {
            lightGreen4.style.visibility = "hidden";
        }

        if (tens < 20) {
            lightGreen5.style.visibility = "hidden";
        }

        if (tens < 25) {
            lightGreen6.style.visibility = "hidden";
        }

        if (tens < 30) {
            lightGreen7.style.visibility = "hidden";
        }

        if (tens < 35) {
            lightGreen8.style.visibility = "hidden";
        }

        //

        if (tens < 40) {
            darkGreen1.style.visibility = "hidden";
        }

        if (tens < 45) {
            darkGreen2.style.visibility = "hidden";
        }

        if (tens < 50) {
            darkGreen3.style.visibility = "hidden";
        }

        if (tens < 55) {
            darkGreen4.style.visibility = "hidden";
        }

        if (tens < 60) {
            darkGreen5.style.visibility = "hidden";
        }

        if (tens < 65) {
            darkGreen6.style.visibility = "hidden";
        }

        if (tens < 70) {
            darkGreen7.style.visibility = "hidden";
        }

        if (tens < 75) {
            darkGreen8.style.visibility = "hidden";
        }

        if (tens < 80) {
            darkGreen9.style.visibility = "hidden";
        }

        //

        if (tens < 85) {
            lightYellow1.style.visibility = "hidden";
        }

        if (tens < 90) {
            lightYellow2.style.visibility = "hidden";
        }

        if (tens < 95) {
            lightYellow3.style.visibility = "hidden";
        }

        if (tens < 100) {
            lightYellow4.style.visibility = "hidden";
        }

        if (tens < 105) {
            lightYellow5.style.visibility = "hidden";
        }

        if (tens < 110) {
            lightYellow6.style.visibility = "hidden";
        }

        if (tens < 115) {
            lightYellow7.style.visibility = "hidden";
        }

        if (tens < 120) {
            lightYellow8.style.visibility = "hidden";
        }

        //

        if (tens < 125) {
            darkYellow1.style.visibility = "hidden";
        }

        if (tens < 130 && startEngineButton.disabled === true) {
            darkYellow2.style.visibility = "hidden";
            thermoSquare.style.left = "48px";
        }

        if (tens < 135) {
            darkYellow3.style.visibility = "hidden";
        }

        if (tens < 140) {
            darkYellow4.style.visibility = "hidden";
        }

        if (tens < 145) {
            darkYellow5.style.visibility = "hidden";
        }

        if (tens < 150) {
            darkYellow6.style.visibility = "hidden";
        }

        if (tens < 155) {
            darkYellow7.style.visibility = "hidden";
        }

        if (tens < 160) {
            darkYellow8.style.visibility = "hidden";
        }

        if (tens < 165) {
            darkYellow9.style.visibility = "hidden";
        }

        //

        if (tens < 170) {
            darkRed1.style.visibility = "hidden";
        }

        if (tens < 175) {
            darkRed2.style.visibility = "hidden";
        }

        if (tens < 180) {
            darkRed3.style.visibility = "hidden";
        }

        if (tens < 185) {
            darkRed4.style.visibility = "hidden";
        }

        if (tens < 190) {
            darkRed5.style.visibility = "hidden";
        }

        if (tens < 195) {
            darkRed6.style.visibility = "hidden";
        }

        if (tens < 200) {
            darkRed7.style.visibility = "hidden";
        }

        if (tens < 205) {
            darkRed8.style.visibility = "hidden";
        }

        if (tens < 210) {
            darkRed9.style.visibility = "hidden";
        }

        //

        if (tens < 215) {
            midnightBlue1.style.visibility = "hidden";
        }

        if (tens < 220) {
            midnightBlue2.style.visibility = "hidden";
        }

        if (tens < 225) {
            midnightBlue3.style.visibility = "hidden";
        }

        if (tens < 230) {
            midnightBlue4.style.visibility = "hidden";
        }

        if (tens < 235) {
            midnightBlue5.style.visibility = "hidden";
        }

        if (tens < 240) {
            midnightBlue6.style.visibility = "hidden";
        }

        //
    }

    function startTimer() {
        tens++;

        tkmIndicator();
        tensMoreFifty();
        tensMoreHunderd();
        tensMoreTwoHunderd();
        tensMoreTwoHunderdTen();
        tensMoreTwoHunderdTwenty();
        tensMoreTwoHunderdThirty();
        tensLessTen();
        tensMoreTen();

        if (tens > 5) {
            startEngineButton.disabled = true;
        }

        if (tens === 240) {
            clearInterval(Interval);
            tens = "240";
        }
    }

    function shutDown() {
        if (tens <= 5) {
            tens = 0;
            lightGreen3Start.style.visibility = "hidden";
            lightGreen2Start.style.visibility = "hidden";
            lightGreen3.style.visibility = "hidden";
            lightGreen2.style.visibility = "hidden";
            lightGreen1Start.style.visibility = "hidden";
            tkmIndication1.style.visibility = "hidden";
            thermoSquare.style.left = "17px";
            thermoSquare.style.transitionDuration = "0.5s";
            thermoIndication.style.opacity = 0.4;
            gasIndication.style.opacity = 0.4;
            gasIndicationMeasures.style.opacity = 0.4;
            weather.style.opacity = 0.4;
            navigation.style.opacity = 0.4;
            kmhSpeed.style.opacity = 0.4;
            kmhSpeedNumber.style.opacity = 0.4;
            panelShadow.style.backgroundColor = "rgba(0, 0, 0, 0.63)";
            panelShadow.style.transitionDelay = "1.7s";

            //petrol

            indicator7m.style.visibility = "hidden"; // 
            indicator7m.style.transitionDelay = "0.5s"; // 

            indicator6m.style.visibility = "hidden"; // 
            indicator6m.style.transitionDelay = "0.10s"; // 

            indicator5m.style.visibility = "hidden"; // 
            indicator5m.style.transitionDelay = "0.15s"; // 

            indicator4m.style.visibility = "hidden"; // 
            indicator4m.style.transitionDelay = "0.20s"; // 

            indicator3m.style.visibility = "hidden"; // 
            indicator3m.style.transitionDelay = "0.25s"; // 

            indicator2m.style.visibility = "hidden"; // 
            indicator2m.style.transitionDelay = "0.30s"; // 

            indicator1m.style.visibility = "hidden"; // 
            indicator1m.style.transitionDelay = "0.35s"; // 
        } else {
            thermoSquare.style.transitionDuration = "5s";
        }
    }

    function start() {
        var lightGreenColor = "#00ff27";
        var darkGreenColor = "#427a4b";
        var lightYellowColor = "#d7d700";
        var darkYellowColor = "#f99c11";
        var darkRedColor = "#f53131";
        var midnightBlueColor = "#0c003b";

        thermoIndication.style.opacity = 1;
        gasIndication.style.opacity = 1;
        gasIndicationMeasures.style.opacity = 1;
        thermoSquare.style.transitionDuration = "5s";
        weather.style.opacity = 1;
        navigation.style.opacity = 1;
        kmhSpeed.style.opacity = 1;
        kmhSpeedNumber.style.opacity = 1;
        panelShadow.style.backgroundColor = "transparent";
        panelShadow.style.transitionDelay = "0s";

        //Ascending
        if (tens === 0) {
            clearInterval(Interval);
            //lightGreen
            lightGreen2Start.style.transitionDelay = "0.1s"; // 7
            lightGreen2Start.style.visibility = "visible"; // 7
            lightGreen2Start.style.backgroundColor = "#C1FCFF";
            //
            lightGreen3Start.style.visibility = "visible"; // 6
            lightGreen3Start.style.transitionDelay = "0.11s"; // 6
            lightGreen3Start.style.backgroundColor = lightGreenColor;
            //
            lightGreen4Start.style.visibility = "visible"; // 5
            lightGreen4Start.style.transitionDelay = "0.12s"; // 5
            lightGreen4Start.style.backgroundColor = lightGreenColor;
            //
            lightGreen5Start.style.visibility = "visible"; // 4
            lightGreen5Start.style.transitionDelay = "0.13s"; // 4
            lightGreen5Start.style.backgroundColor = lightGreenColor;
            //
            lightGreen6Start.style.visibility = "visible"; // 3
            lightGreen6Start.style.transitionDelay = "0.14s"; // 3
            lightGreen6Start.style.backgroundColor = lightGreenColor;
            //
            lightGreen7Start.style.visibility = "visible"; // 3
            lightGreen7Start.style.transitionDelay = "0.15s"; // 3
            lightGreen7Start.style.backgroundColor = lightGreenColor;
            //
            lightGreen8Start.style.visibility = "visible"; // 3
            lightGreen8Start.style.transitionDelay = "0.16s"; // 3
            lightGreen8Start.style.backgroundColor = lightGreenColor;

            //darkGreen
            //
            darkGreen1Start.style.transitionDelay = "0.17s"; // 7
            darkGreen1Start.style.visibility = "visible"; // 7
            darkGreen1Start.style.backgroundColor = darkGreenColor;
            //
            darkGreen2Start.style.visibility = "visible"; // 6
            darkGreen2Start.style.transitionDelay = "0.18s"; // 6
            darkGreen2Start.style.backgroundColor = darkGreenColor;
            //
            darkGreen3Start.style.visibility = "visible"; // 5
            darkGreen3Start.style.transitionDelay = "0.19s"; // 5
            darkGreen3Start.style.backgroundColor = darkGreenColor;
            //
            darkGreen4Start.style.visibility = "visible"; // 4
            darkGreen4Start.style.transitionDelay = "0.20s"; // 4
            darkGreen4Start.style.backgroundColor = darkGreenColor;
            //
            darkGreen5Start.style.visibility = "visible"; // 3
            darkGreen5Start.style.transitionDelay = "0.21s"; // 3
            darkGreen5Start.style.backgroundColor = darkGreenColor;
            //
            darkGreen6Start.style.visibility = "visible"; // 3
            darkGreen6Start.style.transitionDelay = "0.22s"; // 3
            darkGreen6Start.style.backgroundColor = darkGreenColor;
            //
            darkGreen7Start.style.visibility = "visible"; // 3
            darkGreen7Start.style.transitionDelay = "0.23s"; // 3
            darkGreen7Start.style.backgroundColor = darkGreenColor;
            //
            darkGreen8Start.style.visibility = "visible"; // 3
            darkGreen8Start.style.transitionDelay = "0.24s"; // 3
            darkGreen8Start.style.backgroundColor = darkGreenColor;
            //
            darkGreen9Start.style.visibility = "visible"; // 3
            darkGreen9Start.style.transitionDelay = "0.25s"; // 3
            darkGreen9Start.style.backgroundColor = darkGreenColor;

            //lightYellow
            //
            lightYellow1Start.style.transitionDelay = "0.26s"; // 7
            lightYellow1Start.style.visibility = "visible"; // 7
            lightYellow1Start.style.backgroundColor = lightYellowColor;
            //
            lightYellow2Start.style.visibility = "visible"; // 6
            lightYellow2Start.style.transitionDelay = "0.27s"; // 6
            lightYellow2Start.style.backgroundColor = lightYellowColor;
            //
            lightYellow3Start.style.visibility = "visible"; // 5
            lightYellow3Start.style.transitionDelay = "0.28s"; // 5
            lightYellow3Start.style.backgroundColor = lightYellowColor;
            //
            lightYellow4Start.style.visibility = "visible"; // 4
            lightYellow4Start.style.transitionDelay = "0.29s"; // 4
            lightYellow4Start.style.backgroundColor = lightYellowColor;
            //
            lightYellow5Start.style.visibility = "visible"; // 3
            lightYellow5Start.style.transitionDelay = "0.30s"; // 3
            lightYellow5Start.style.backgroundColor = lightYellowColor;
            //
            lightYellow6Start.style.visibility = "visible"; // 3
            lightYellow6Start.style.transitionDelay = "0.31s"; // 3
            lightYellow6Start.style.backgroundColor = lightYellowColor;
            //
            lightYellow7Start.style.visibility = "visible"; // 3
            lightYellow7Start.style.transitionDelay = "0.32s"; // 3
            lightYellow7Start.style.backgroundColor = lightYellowColor;
            //
            lightYellow8Start.style.visibility = "visible"; // 3
            lightYellow8Start.style.transitionDelay = "0.33s"; // 3
            lightYellow8Start.style.backgroundColor = lightYellowColor;

            //darkYellow
            //
            darkYellow1Start.style.transitionDelay = "0.34s"; // 7
            darkYellow1Start.style.visibility = "visible"; // 7
            darkYellow1Start.style.backgroundColor = darkYellowColor;
            //
            darkYellow2Start.style.visibility = "visible"; // 6
            darkYellow2Start.style.transitionDelay = "0.35s"; // 6
            darkYellow2Start.style.backgroundColor = darkYellowColor;
            //
            darkYellow3Start.style.visibility = "visible"; // 5
            darkYellow3Start.style.transitionDelay = "0.36s"; // 5
            darkYellow3Start.style.backgroundColor = darkYellowColor;
            //
            darkYellow4Start.style.visibility = "visible"; // 4
            darkYellow4Start.style.transitionDelay = "0.37s"; // 4
            darkYellow4Start.style.backgroundColor = darkYellowColor;
            //
            darkYellow5Start.style.visibility = "visible"; // 3
            darkYellow5Start.style.transitionDelay = "0.38s"; // 3
            darkYellow5Start.style.backgroundColor = darkYellowColor;
            //
            darkYellow6Start.style.visibility = "visible"; // 3
            darkYellow6Start.style.transitionDelay = "0.39s"; // 3
            darkYellow6Start.style.backgroundColor = darkYellowColor;
            //
            darkYellow7Start.style.visibility = "visible"; // 3
            darkYellow7Start.style.transitionDelay = "0.40s"; // 3
            darkYellow7Start.style.backgroundColor = darkYellowColor;
            //
            darkYellow8Start.style.visibility = "visible"; // 3
            darkYellow8Start.style.transitionDelay = "0.41s"; // 3
            darkYellow8Start.style.backgroundColor = darkYellowColor;
            //
            darkYellow9Start.style.visibility = "visible"; // 3
            darkYellow9Start.style.transitionDelay = "0.42s"; // 3
            darkYellow9Start.style.backgroundColor = darkYellowColor;

            //darkRed
            //
            darkRed1Start.style.transitionDelay = "0.43s"; // 7
            darkRed1Start.style.visibility = "visible"; // 7
            darkRed1Start.style.backgroundColor = darkRedColor;
            //
            darkRed2Start.style.visibility = "visible"; // 6
            darkRed2Start.style.transitionDelay = "0.44s"; // 6
            darkRed2Start.style.backgroundColor = darkRedColor;
            //
            darkRed3Start.style.visibility = "visible"; // 5
            darkRed3Start.style.transitionDelay = "0.45s"; // 5
            darkRed3Start.style.backgroundColor = darkRedColor;
            //
            darkRed4Start.style.visibility = "visible"; // 4
            darkRed4Start.style.transitionDelay = "0.46s"; // 4
            darkRed4Start.style.backgroundColor = darkRedColor;
            //
            darkRed5Start.style.visibility = "visible"; // 3
            darkRed5Start.style.transitionDelay = "0.47s"; // 3
            darkRed5Start.style.backgroundColor = darkRedColor;
            //
            darkRed6Start.style.visibility = "visible"; // 3
            darkRed6Start.style.transitionDelay = "0.48s"; // 3
            darkRed6Start.style.backgroundColor = darkRedColor;
            //
            darkRed7Start.style.visibility = "visible"; // 3
            darkRed7Start.style.transitionDelay = "0.49s"; // 3
            darkRed7Start.style.backgroundColor = darkRedColor;
            //
            darkRed8Start.style.visibility = "visible"; // 3
            darkRed8Start.style.transitionDelay = "0.50s"; // 3
            darkRed8Start.style.backgroundColor = darkRedColor;
            //
            darkRed9Start.style.visibility = "visible"; // 3
            darkRed9Start.style.transitionDelay = "0.51s"; // 3
            darkRed9Start.style.backgroundColor = darkRedColor;

            //midnightBlue
            midnightBlue1Start.style.visibility = "visible"; // 6
            midnightBlue1Start.style.transitionDelay = "0.52s"; // 6
            midnightBlue1Start.style.backgroundColor = midnightBlueColor;
            midnightBlue2Start.style.visibility = "visible"; // 5
            midnightBlue2Start.style.transitionDelay = "0.53s"; // 5
            midnightBlue2Start.style.backgroundColor = midnightBlueColor;
            midnightBlue3Start.style.visibility = "visible"; // 4
            midnightBlue3Start.style.transitionDelay = "0.54s"; // 4
            midnightBlue3Start.style.backgroundColor = midnightBlueColor;
            midnightBlue4Start.style.visibility = "visible"; // 3
            midnightBlue4Start.style.transitionDelay = "0.55s"; // 3
            midnightBlue4Start.style.backgroundColor = midnightBlueColor;
            midnightBlue5Start.style.visibility = "visible"; // 3
            midnightBlue5Start.style.transitionDelay = "0.56s"; // 3
            midnightBlue5Start.style.backgroundColor = midnightBlueColor;
            midnightBlue6Start.style.visibility = "visible"; // 3
            midnightBlue6Start.style.transitionDelay = "0.57s"; // 3
            midnightBlue6Start.style.backgroundColor = midnightBlueColor;

            //tkm
            tkmIndication1.style.visibility = "visible";
            tkmIndication1.style.transitionDelay = "0.07s";
            //
            tkmIndication2.style.visibility = "visible";
            tkmIndication2.style.transitionDelay = "0.14s";
            //
            tkmIndication3.style.visibility = "visible";
            tkmIndication3.style.transitionDelay = "0.21s";
            //
            tkmIndication4.style.visibility = "visible";
            tkmIndication4.style.transitionDelay = "0.28s";
            //
            tkmIndication5.style.visibility = "visible";
            tkmIndication5.style.transitionDelay = "0.35s";
            //
            tkmIndication6.style.visibility = "visible";
            tkmIndication6.style.transitionDelay = "0.42s";
            //
            tkmIndication7.style.visibility = "visible";
            tkmIndication7.style.transitionDelay = "0.49s";

            indicator1m.style.visibility = "visible"; // 
            indicator1m.style.transitionDelay = "0.13s"; // 

            indicator2m.style.visibility = "visible"; // 
            indicator2m.style.transitionDelay = "0.33s"; // 

            indicator3m.style.visibility = "visible"; // 
            indicator3m.style.transitionDelay = "0.53s"; // 

            indicator4m.style.visibility = "visible"; // 
            indicator4m.style.transitionDelay = "0.73s"; // 

            indicator5m.style.visibility = "visible"; // 
            indicator5m.style.transitionDelay = "0.93s"; // 

            indicator6m.style.visibility = "visible"; // 
            indicator6m.style.transitionDelay = "1.13s"; // 

            indicator7m.style.visibility = "visible"; // 
            indicator7m.style.transitionDelay = "1.33s"; // 
        }

        if (midnightBlue6.style) {
            setTimeout(startInvert, 760);
        }
    }

    function startInvert() {
        //Descending
        console.log("Descending");
        midnightBlue6Start.style.visibility = "hidden"; // 6
        midnightBlue6Start.style.transitionDelay = "0.10s"; // 6
        midnightBlue5Start.style.visibility = "hidden"; // 5
        midnightBlue5Start.style.transitionDelay = "0.11s"; // 5
        midnightBlue4Start.style.visibility = "hidden"; // 4
        midnightBlue4Start.style.transitionDelay = "0.12s"; // 4
        midnightBlue3Start.style.visibility = "hidden"; // 3
        midnightBlue3Start.style.transitionDelay = "0.13s"; // 3
        midnightBlue2Start.style.visibility = "hidden"; // 2
        midnightBlue2Start.style.transitionDelay = "0.14s"; // 2
        midnightBlue1Start.style.visibility = "hidden"; // 1
        midnightBlue1Start.style.transitionDelay = "0.15s"; // 1

        //DarkRed
        darkRed9Start.style.visibility = "hidden"; // 9
        darkRed9Start.style.transitionDelay = "0.16s"; // 9
        darkRed8Start.style.visibility = "hidden"; // 8
        darkRed8Start.style.transitionDelay = "0.17s"; // 8
        darkRed7Start.style.visibility = "hidden"; // 7
        darkRed7Start.style.transitionDelay = "0.18s"; // 7
        darkRed6Start.style.visibility = "hidden"; // 6
        darkRed6Start.style.transitionDelay = "0.19s"; // 6
        darkRed5Start.style.visibility = "hidden"; // 5
        darkRed5Start.style.transitionDelay = "0.20s"; // 5
        darkRed4Start.style.visibility = "hidden"; // 4
        darkRed4Start.style.transitionDelay = "0.21s"; // 4
        darkRed3Start.style.visibility = "hidden"; // 3
        darkRed3Start.style.transitionDelay = "0.22s"; // 3
        darkRed2Start.style.visibility = "hidden"; // 2
        darkRed2Start.style.transitionDelay = "0.23s"; // 2
        darkRed1Start.style.visibility = "hidden"; // 1
        darkRed1Start.style.transitionDelay = "0.24s"; // 1

        //darkYellow

        darkYellow9Start.style.visibility = "hidden"; // 9
        darkYellow9Start.style.transitionDelay = "0.25s"; // 9
        darkYellow8Start.style.visibility = "hidden"; // 8
        darkYellow8Start.style.transitionDelay = "0.26s"; // 8
        darkYellow7Start.style.visibility = "hidden"; // 7
        darkYellow7Start.style.transitionDelay = "0.27s"; // 7
        darkYellow6Start.style.visibility = "hidden"; // 6
        darkYellow6Start.style.transitionDelay = "0.28s"; // 6
        darkYellow5Start.style.visibility = "hidden"; // 5
        darkYellow5Start.style.transitionDelay = "0.29s"; // 5
        darkYellow4Start.style.visibility = "hidden"; // 4
        darkYellow4Start.style.transitionDelay = "0.30s"; // 4
        darkYellow3Start.style.visibility = "hidden"; // 3
        darkYellow3Start.style.transitionDelay = "0.31s"; // 3
        darkYellow2Start.style.visibility = "hidden"; // 2
        darkYellow2Start.style.transitionDelay = "0.32s"; // 2
        darkYellow1Start.style.visibility = "hidden"; // 1
        darkYellow1Start.style.transitionDelay = "0.33s"; // 1

        // lightYellow
        lightYellow8Start.style.visibility = "hidden"; // 8
        lightYellow8Start.style.transitionDelay = "0.34s"; // 8
        lightYellow7Start.style.visibility = "hidden"; // 7
        lightYellow7Start.style.transitionDelay = "0.35s"; // 7
        lightYellow6Start.style.visibility = "hidden"; // 6
        lightYellow6Start.style.transitionDelay = "0.36s"; // 6
        lightYellow5Start.style.visibility = "hidden"; // 5
        lightYellow5Start.style.transitionDelay = "0.37s"; // 5
        lightYellow4Start.style.visibility = "hidden"; // 4
        lightYellow4Start.style.transitionDelay = "0.38s"; // 4
        lightYellow3Start.style.visibility = "hidden"; // 3
        lightYellow3Start.style.transitionDelay = "0.39s"; // 3
        lightYellow2Start.style.visibility = "hidden"; // 2
        lightYellow2Start.style.transitionDelay = "0.40s"; // 2
        lightYellow1Start.style.visibility = "hidden"; // 1
        lightYellow1Start.style.transitionDelay = "0.41s"; // 1

        //darkGreen
        darkGreen9Start.style.visibility = "hidden"; // 9
        darkGreen9Start.style.transitionDelay = "0.42s"; // 9
        darkGreen8Start.style.visibility = "hidden"; // 8
        darkGreen8Start.style.transitionDelay = "0.43s"; // 8
        darkGreen7Start.style.visibility = "hidden"; // 7
        darkGreen7Start.style.transitionDelay = "0.44s"; // 7
        darkGreen6Start.style.visibility = "hidden"; // 6
        darkGreen6Start.style.transitionDelay = "0.45s"; // 6
        darkGreen5Start.style.visibility = "hidden"; // 5
        darkGreen5Start.style.transitionDelay = "0.46s"; // 5
        darkGreen4Start.style.visibility = "hidden"; // 4
        darkGreen4Start.style.transitionDelay = "0.47s"; // 4
        darkGreen3Start.style.visibility = "hidden"; // 3
        darkGreen3Start.style.transitionDelay = "0.48s"; // 3
        darkGreen2Start.style.visibility = "hidden"; // 2
        darkGreen2Start.style.transitionDelay = "0.49s"; // 2
        darkGreen1Start.style.visibility = "hidden"; // 1
        darkGreen1Start.style.transitionDelay = "0.50s"; // 1

        //lightGreen
        lightGreen8Start.style.visibility = "hidden"; // 8
        lightGreen8Start.style.transitionDelay = "0.51s"; // 8
        lightGreen7Start.style.visibility = "hidden"; // 7
        lightGreen7Start.style.transitionDelay = "0.52s"; // 7
        lightGreen6Start.style.visibility = "hidden"; // 6
        lightGreen6Start.style.transitionDelay = "0.53s"; // 6
        lightGreen5Start.style.visibility = "hidden"; // 5
        lightGreen5Start.style.transitionDelay = "0.54s"; // 5
        lightGreen4Start.style.visibility = "hidden"; // 4
        lightGreen4Start.style.transitionDelay = "0.55s"; // 4
        lightGreen3Start.style.visibility = "hidden"; // 3
        lightGreen3Start.style.transitionDelay = "0.56s"; // 3

        //tkm
        tkmIndication7.style.visibility = "hidden";
        tkmIndication7.style.transitionDelay = "0.07s";
        //
        tkmIndication6.style.visibility = "hidden";
        tkmIndication6.style.transitionDelay = "0.14s";
        //
        tkmIndication5.style.visibility = "hidden";
        tkmIndication5.style.transitionDelay = "0.21s";
        //
        tkmIndication4.style.visibility = "hidden";
        tkmIndication4.style.transitionDelay = "0.28s";
        //
        tkmIndication3.style.visibility = "hidden";
        tkmIndication3.style.transitionDelay = "0.35s";
        //
        tkmIndication2.style.visibility = "hidden";
        tkmIndication2.style.transitionDelay = "0.42s";
    }

    function startTimerInvert() {
        if (tens > 0) {
            tens--;

            tensLessTen();

            if (tens === 0) {
                clearInterval(Interval);
                tens = "00";
                setTimeout(function() {
                    accLongDown.pause();
                }, 300);
                idling.muted = false;
                idling.play();
                acceleration.load();
            }

            tensMoreTen();
        }

        tensDiscending();
        tkmIndicatorInvert();

        if (tens < 5) {
            startEngineButton.disabled = false;
        }
    }

    function neutralGasUp() {
        if (tens === 0) {
            clearInterval(Interval);

            //tkm
            tkmIndication1.style.visibility = "visible";
            tkmIndication1.style.transitionDelay = "0.07s";
            //
            tkmIndication2.style.visibility = "visible";
            tkmIndication2.style.transitionDelay = "0.14s";
            //
            tkmIndication3.style.visibility = "visible";
            tkmIndication3.style.transitionDelay = "0.21s";
            //
            tkmIndication4.style.visibility = "visible";
            tkmIndication4.style.transitionDelay = "0.28s";
            //
            tkmIndication5.style.visibility = "visible";
            tkmIndication5.style.transitionDelay = "0.35s";
            //
            tkmIndication6.style.visibility = "visible";
            tkmIndication6.style.transitionDelay = "0.42s";
            //
            tkmIndication7.style.visibility = "visible";
            tkmIndication7.style.transitionDelay = "0.49s";

            indicator1m.style.visibility = "visible"; // 
            indicator1m.style.transitionDelay = "0.13s"; // 

            indicator2m.style.visibility = "visible"; // 
            indicator2m.style.transitionDelay = "0.33s"; // 

            indicator3m.style.visibility = "visible"; // 
            indicator3m.style.transitionDelay = "0.53s"; // 

            indicator4m.style.visibility = "visible"; // 
            indicator4m.style.transitionDelay = "0.73s"; // 

            indicator5m.style.visibility = "visible"; // 
            indicator5m.style.transitionDelay = "0.93s"; // 

            indicator6m.style.visibility = "visible"; // 
            indicator6m.style.transitionDelay = "1.13s"; // 

            indicator7m.style.visibility = "visible"; // 
            indicator7m.style.transitionDelay = "1.33s"; //
        }
    }

    function neutralGasDown() {
        //tkm
        tkmIndication7.style.visibility = "hidden";
        tkmIndication7.style.transitionDelay = "0.07s";
        //
        tkmIndication6.style.visibility = "hidden";
        tkmIndication6.style.transitionDelay = "0.14s";
        //
        tkmIndication5.style.visibility = "hidden";
        tkmIndication5.style.transitionDelay = "0.21s";
        //
        tkmIndication4.style.visibility = "hidden";
        tkmIndication4.style.transitionDelay = "0.28s";
        //
        tkmIndication3.style.visibility = "hidden";
        tkmIndication3.style.transitionDelay = "0.35s";
        //
        tkmIndication2.style.visibility = "hidden";
        tkmIndication2.style.transitionDelay = "0.42s";
    }
}