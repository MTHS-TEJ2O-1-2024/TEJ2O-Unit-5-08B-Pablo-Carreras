
/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Pablo Carreras 
 * Created on: Oct 2024
 * This program moves a car and when is close to something it stops 
*/

// setup
basic.showIcon(IconNames.Happy)
let distanceOfObject: number

// loop forever
while (true) {
    distanceOfObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    // forward
    if (distanceOfObject > 10) {
        basic.showIcon(IconNames.Yes)
        robotbit.StpCarMove(10, 48)
    } else {

        // stop
        basic.showIcon(IconNames.No)
        robotbit.StpCarMove(0, 0)
        basic.pause(500)

        // back
        robotbit.StpCarMove(-10, 48)
        basic.pause(1000)
        
        // turn 
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0)
        basic.pause(500)
        
        // move 
        robotbit.StpCarMove(10, 48)
    }
}
