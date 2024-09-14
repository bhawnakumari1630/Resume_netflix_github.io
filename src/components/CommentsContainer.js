import React from "react";
const CommentsData = [
  {
    name: "radhikanarayana",
    likes: 20,
    text: "Remember, Maps in JavaScript are key-value pairs where keys can be any type of value",
    replies: [
      {
        name: "shyam sunder",
        likes: 20,
        text: "This approach allows you to update a Map similarly to how you would update an object with Object.assign",

        replies: [
          {
            name: "vrindavaneshwari",
            likes: 20,
            text: "If you're looking to use Object.assign with a Map object in JavaScript, you can't directly assign values like you would with an object",

            replies: [
              {
                name: "raseshwari",
                likes: 20,
                text: " Instead of Object.assign, you'd typically use the set method to add or update entries in a Map.",

                replies: [
                  {
                    name: "raseshwari",
                    likes: 20,
                    text: " Instead of Object.assign, you'd typically use the set method to add or update entries in a Map.",
                  },
                  {
                    name: "shyama",
                    likes: 20,
                    text: " Instead of Object.assign, you'd typically use the set method to add or update entries in a Map.",
                    replies: [
                      {
                        name: "raseshwari",
                        likes: 20,
                        text: " Instead of Object.assign, you'd typically use the set method to add or update entries in a Map.",
                      },
                      {
                        name: "raseshwari",
                        likes: 20,
                        text: " Instead of Object.assign, you'd typically use the set method to add or update entries in a Map.",
                      },
                    ],
                  },
                  {
                    name: "vrishbhanuja",
                    likes: 20,
                    text: " Instead of Object.assign, you'd typically use the set method to add or update entries in a Map.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "raseshwari",
    likes: 20,
    text: " Instead of Object.assign, you'd typically use the set method to add or update entries in a Map.",
  },
  {
    name: "shyam sunder",
    likes: 20,
    text: "This approach allows you to update a Map similarly to how you would update an object with Object.assign",
    replies: [
      {
        name: "vrindavaneshwari",
        likes: 20,
        text: "If you're looking to use Object.assign with a Map object in JavaScript, you can't directly assign values like you would with an object",

        replies: [
          {
            name: "raseshwari",
            likes: 20,
            text: " Instead of Object.assign, you'd typically use the set method to add or update entries in a Map.",
          },
        ],
      },
    ],
  },
  {
    name: "vrindavaneshwari",
    likes: 20,
    text: "If you're looking to use Object.assign with a Map object in JavaScript, you can't directly assign values like you would with an object",
    replies: [
      {
        name: "raseshwari",
        likes: 20,
        text: " Instead of Object.assign, you'd typically use the set method to add or update entries in a Map.",
      },
    ],
  },
  {
    name: "radhikanarayana",
    likes: 20,
    text: "Remember, Maps in JavaScript are key-value pairs where keys can be any type of value",
    replies: [
      {
        name: "shyam sunder",
        likes: 20,
        text: "This approach allows you to update a Map similarly to how you would update an object with Object.assign",

        replies: [
          {
            name: "vrindavaneshwari",
            likes: 20,
            text: "If you're looking to use Object.assign with a Map object in JavaScript, you can't directly assign values like you would with an object",

            replies: [
              {
                name: "raseshwari",
                likes: 20,
                text: " Instead of Object.assign, you'd typically use the set method to add or update entries in a Map.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "radhikanarayana",
    likes: 20,
    text: "Remember, Maps in JavaScript are key-value pairs where keys can be any type of value",
    replies: [
      {
        name: "shyam sunder",
        likes: 20,
        text: "This approach allows you to update a Map similarly to how you would update an object with Object.assign",

        replies: [
          {
            name: "vrindavaneshwari",
            likes: 20,
            text: "If you're looking to use Object.assign with a Map object in JavaScript, you can't directly assign values like you would with an object",

            replies: [
              {
                name: "raseshwari",
                likes: 20,
                text: " Instead of Object.assign, you'd typically use the set method to add or update entries in a Map.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "shyam sunder",
    likes: 20,
    text: "This approach allows you to update a Map similarly to how you would update an object with Object.assign",
    replies: [
      {
        name: "vrindavaneshwari",
        likes: 20,
        text: "If you're looking to use Object.assign with a Map object in JavaScript, you can't directly assign values like you would with an object",

        replies: [
          {
            name: "raseshwari",
            likes: 20,
            text: " Instead of Object.assign, you'd typically use the set method to add or update entries in a Map.",
          },
        ],
      },
    ],
  },
  {
    name: "vrindavaneshwari",
    likes: 20,
    text: "If you're looking to use Object.assign with a Map object in JavaScript, you can't directly assign values like you would with an object",
    replies: [
      {
        name: "raseshwari",
        likes: 20,
        text: " Instead of Object.assign, you'd typically use the set method to add or update entries in a Map.",
      },
    ],
  },
  {
    name: "radhikanarayana",
    likes: 20,
    text: "Remember, Maps in JavaScript are key-value pairs where keys can be any type of value",
    replies: [
      {
        name: "shyam sunder",
        likes: 20,
        text: "This approach allows you to update a Map similarly to how you would update an object with Object.assign",

        replies: [
          {
            name: "vrindavaneshwari",
            likes: 20,
            text: "If you're looking to use Object.assign with a Map object in JavaScript, you can't directly assign values like you would with an object",

            replies: [
              {
                name: "raseshwari",
                likes: 20,
                text: " Instead of Object.assign, you'd typically use the set method to add or update entries in a Map.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "raseshwari",
    likes: 20,
    text: " Instead of Object.assign, you'd typically use the set method to add or update entries in a Map.",
  },
];

function CommentsContainer() {
  return (
    <div className="my-5 mx-4 p-2 ">
      <h2 className="font-bold text-2xl mb-4">Comments</h2>
      <div className="space-y-5 ">
      <CommentsList cmnt_data={CommentsData} />
      </div>
    </div>
  );
}

function CommentsList({ cmnt_data }) {
  return cmnt_data.map((cmnt, index) => (
    <div className=" rounded-tl-md border-l border-slate-400">
      <Comments key={"data" + index} data={cmnt} />
      <div className="ms-4 mt-2 mb-0 ">
        {cmnt.replies && <CommentsList cmnt_data={cmnt.replies} />}
      </div>
    </div>
  ));
}

function Comments({ data }) {
  // console.log(data);
  return (
    <>
        <div className="py-2 ps-4 rounded-lg bg-slate-100 flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
            alt="userImage"
            width="50"
            height="50"
          />
          <div className="px-3 ">
            <p className="font-bold">{data.name}</p>
            <p className="-mt-0.5 line-clamp-1 text-sm">{data.text}</p>
            <div className="flex items-center gap-5 text-xs tracking-wide text-slate-500 font-medium ">
              <div className="flex items-center text-sm ">
                <img
                  src="https://static.thenounproject.com/png/113104-200.png"
                  alt="like-icon"
                  width={30}
                  height={30}
                  className=" scale-x-[-1] "
                />
                <p className="pt-1 text-xs">{data.likes}</p>
              </div>
              <p>reply</p>
            </div>
          </div>
        </div>
    </>
  );
}

export default CommentsContainer;
