import React from "react";
import Link from "../Link";

const RC1 = ({ topicHeads, selectLessonNum, selectLessonMax }) => {
  const lessonClicked = (num, max) => {
    selectLessonNum(num);
    selectLessonMax(max);
  };

  const renderedTopics = topicHeads.map((item) => {
    const path = item.desc === "" ? "./drill" : "./lesson";
    return (
      <tr>
        <td>
          <div class="d-flex px-2 py-1">
            <p class="text-xs font-weight-bold mb-0">
              &nbsp;&nbsp;&nbsp;{item.num}
            </p>
          </div>
        </td>
        <td>
          <p class="text-xs font-weight-bold mb-0">{item.head}</p>
          <p class="text-xs text-secondary mb-0">{item.sub}</p>
        </td>
        <td>
          <div class="align-middle text-center">
            <p class="text-xs text-secondary mb-0">{item.desc}</p>
          </div>
        </td>
        <td class="align-middle">
          <button
            onClick={(e) => {
              lessonClicked(item.num, item.max);
            }}
            class="btn btn-link text-secondary mb-0"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Link href={path}>
              <i class="fa fa-eye text-xs" aria-hidden="true"></i>
            </Link>
          </button>
        </td>
        <td class="align-middle">
          <button
            class="btn btn-link text-secondary mb-0"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa fa-share text-xs" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    );
  });

  return <>{renderedTopics}</>;
};

export default RC1;
