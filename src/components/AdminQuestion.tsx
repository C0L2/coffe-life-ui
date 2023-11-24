import { AdminQuestions } from "../types";
import { useDeleteQuestionMutation } from "../api";
import LoadingOverlay from "../pages/Layouts/LoadingOverlay";

export const AdminQuestion: React.FC<AdminQuestions> = (props) => {
  const [deleteQuestion, { isLoading }] = useDeleteQuestionMutation();

  const handleDeleteQuestion = () => {
    deleteQuestion(props.id);
  };

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <>
      <div className="welcome-admin">
        <div className="see-q-card" style={{ marginTop: "15px" }}>
          <div className="title-with-icon">
            <div
              style={{
                marginTop: "15px",
                marginLeft: "15px",
                fontWeight: "bold",
              }}
            >
              {props.user}
            </div>
            <div className="access-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  onClick={handleDeleteQuestion}
                  d="M8.75 26.25C8.0625 26.25 7.47396 26.0052 6.98438 25.5156C6.49479 25.026 6.25 24.4375 6.25 23.75V7.5H5V5H11.25V3.75H18.75V5H25V7.5H23.75V23.75C23.75 24.4375 23.5052 25.026 23.0156 25.5156C22.526 26.0052 21.9375 26.25 21.25 26.25H8.75ZM21.25 7.5H8.75V23.75H21.25V7.5ZM11.25 21.25H13.75V10H11.25V21.25ZM16.25 21.25H18.75V10H16.25V21.25Z"
                  fill="#DC7755"
                />
              </svg>
            </div>
          </div>
          <div
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          >
            {props.question}
          </div>
        </div>
      </div>
    </>
  );
};
