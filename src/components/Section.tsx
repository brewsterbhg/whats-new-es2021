// @ts-nocheck
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import raw from "rehype-raw";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

import Divider from "./Divider";

type SectionProps = {
  markdown: string;
};

const Section: React.FC<SectionProps> = ({ markdown }) => {
  const components = {
    code({ children, ...props }) {
      return (
        <SyntaxHighlighter
          style={monokai}
          language="javascript"
          PreTag="div"
          children={String(children).replace(/\n$/, "")}
          {...props}
        />
      );
    },
  };

  return (
    <>
      <ReactMarkdown
        children={markdown}
        components={components}
        rehypePlugins={[raw]}
      />
      <Divider />
    </>
  );
};

export default Section;
