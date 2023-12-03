import React from "react";
import prisma from "@/utils/db";

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: "wake up",
    },
  });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

const PrismaExample = async () => {
  const tasks = await prismaHandlers();
  return (
    <div>
      <h1 className="text-5xl">Prisma Examples</h1>
      {tasks.map((task) => {
        return (
          <h2 className="text-xl py-2" key={task.id}>
            {task.content}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaExample;
