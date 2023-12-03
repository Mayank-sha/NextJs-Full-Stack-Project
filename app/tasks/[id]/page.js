// import React from "react";
// import { getTask } from "@/utils/actions";
// import Link from "next/link";
// import EditForm from "@/components/EditForm";

// const SingleTaskPage = async ({ params }) => {
//   const task = await getTask(params.id);
//   return (
//     <>
//       <div className="mb-16">
//         <Link href="/tasks" className="btn btn-accent">
//           Back To Tasks
//         </Link>
//         <EditForm task={task} />
//       </div>
//     </>
//   );
// };

// export default SingleTaskPage;

import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/actions";
import Link from "next/link";

const SingleTaskPage = async ({ params }) => {
  const task = await getTask(params.id);
  console.log(task);
  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          back to tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};
export default SingleTaskPage;
