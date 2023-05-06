import { Button, Modal } from "react-bootstrap";

export const ModalDelete = ({
  handleNoteDelete,
  showDeleteModal,
  setShowDeleteModal,
}) => {
  const handleDeleteConfirm = () => {
    handleNoteDelete();
    setShowDeleteModal(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  return (
    <Modal show={showDeleteModal} onHide={handleDeleteCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this note?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleDeleteCancel}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDeleteConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
