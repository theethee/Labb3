import FormButton from "./Forms/FormButton";
import InputBlog from "./Blog/InputBlog";
import InputTitle from "./Blog/InputTitle";
import styled from "styled-components";
import { useState } from "react";

// TODO: set validation for document before posting

const RegisterForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: solid 2px #7f6e55;
  border-radius: 15px;
  box-shadow: 0 3px 10px rgb(164 157 146 / 0.2);
  padding: 15px;
`;

function CreateBlogPost() {
  const [title, setTitle] = useState(null);
  const [blogPost, setblogPost] = useState(null);

  //   const [blogPost, setBlogPost] = useState("");
  //   const [disabled, setDisabled] = useState(true);

  // const [formValues, setFormvalues] = useState("");

  function handleBlogValues(e) {
    e.preventDefault();
    const blogvalues = {
      title: title,
      blogPost: blogPost,
    };

    console.log("Värden från bloggen: ", { blogvalues });
  }

  return (
    <RegisterForm>
      <form>
        <InputTitle
          placeholder={"Title"}
          value={title}
          onchange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <InputBlog
          placeholder={"Write something"}
          value={blogPost}
          onChange={(e) => {
            setblogPost(e.target.value);
          }}
        />
        <div style={{ padding: "5px" }}>
          <FormButton label={"Post"} onClick={handleBlogValues} />
        </div>
      </form>
    </RegisterForm>
  );
}

export default CreateBlogPost;
