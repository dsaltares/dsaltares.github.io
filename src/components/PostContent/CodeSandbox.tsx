type CodeSandboxProps = {
  id: string;
};

const CodeSandbox = ({ id }: CodeSandboxProps) => (
  <iframe
    className="mb-5"
    src={`https://codesandbox.io/embed/${id}?fontsize=14&hidenavigation=1&theme=dark&view=preview`}
    style={{
      width: '100%',
      height: '500px',
      border: '1px solid #000',
      borderRadius: '4px',
      overflow: ' hidden',
    }}
    title="sticky-scrolling-header"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
);

export default CodeSandbox;
