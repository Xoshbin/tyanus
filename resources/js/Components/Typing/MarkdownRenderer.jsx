import React from "react";
import ReactDom from "react-dom";
import Markdown from "react-markdown";

const MarkdownRenderer = ({ markdownContent, className }) => {
    return (
        <div className={`markdown-container ${className}`}>
            <Markdown>{markdownContent}</Markdown>,
        </div>
    );
};

export default MarkdownRenderer;
