basic.forever(function () {
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
    } else {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 50)
        }
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
        }
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 100)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 100)
        }
    }
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 50)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
    }
})
