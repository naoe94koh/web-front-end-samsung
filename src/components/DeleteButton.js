const DeleteButton = (props) => {
  let buttonLabel = props.label ?? '삭제';

  return (
    <button
      type="button"
      aria-label={buttonLabel}
      title={buttonLabel}
      style={{ marginLeft: '8px' }}
      onClick={() => props.onDelete(props.deleteIndex)}
    >
      ×
    </button>
  );
};

export default DeleteButton;
