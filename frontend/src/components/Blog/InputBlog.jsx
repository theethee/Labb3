import TextField from "@mui/material/TextField";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInputBlog = styled(TextField)`
  box-shadow: 0 3px 10px rgb(164 157 146 / 0.2);
  width: 95%;
  /* color: #000000; */

  label.Mui-focused {
    color: #7f6e55;
  }
  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #baaa91;
      /* background-color: #ffffff; */
    }
    & .MuiOutlinedInput-notchedOutline {
      border-color: #baaa91;
    }
  }
`;

export default function InputBlog(props) {
  const { placeholder, value, onChange, type } = props;
  return (
    <>
      {/* <StyledInputBlog
          label={placeholder}
          multiline
          // rows={rows}
          onChange={onChange}
          value={value}
          type={type}
        /> */}

      <StyledInputBlog
        style={{ marginTop: "1rem" }}
        label={placeholder}
        multiline
        // rows={rows}
        onChange={onChange}
        value={value}
        type={type}
        rows={18}
      />
    </>
  );
}

InputBlog.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.node,
  type: PropTypes.string,
  // rows: PropTypes.number,
};
