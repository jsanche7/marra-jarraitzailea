basic.forever(function () {
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 38)
    } else {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 38)
        }
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 38)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
        }
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 38)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 38)
        }
    }
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 0) {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 38)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 38)
    }
})
