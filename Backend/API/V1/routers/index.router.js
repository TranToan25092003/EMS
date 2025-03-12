"use strict";

const taskRouter = require("./task.router");
const userRouter = require("./user.router");
const employeeRouter = require("./employee.router");
const departmentRouter = require("./department.router");
const attendanceRouter = require("./attendance.router");
const notificationRouter = require("./notification.router");
const logRouter = require("./log.router");
const backupRouter = require("./backup.router");

module.exports = (app) => {
  const version = "/api/v1";

  app.use(version + "/tasks", taskRouter);

  app.use(version + "/user", userRouter);

  app.use(version + "/employee", employeeRouter);

  app.use(version + "/department", departmentRouter);

  app.use(version + "/attendance", attendanceRouter);

  app.use(version + "/notification", notificationRouter);

  app.use(version + "/logs", logRouter);

  app.use(version + "/backup", backupRouter);
};
