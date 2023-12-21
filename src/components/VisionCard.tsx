import { VisionCardProp } from "../types"

const VisionCard: React.FC<VisionCardProp> = (props) => {
  const isTitleToShow = props.title === "Показать"

  const titleStyles = {
    fontSize: "16px",
    fontWeight: 700,
    color: isTitleToShow ? "#fff" : "black",
  }
  return (
    <>
      <div
        className="menu-card"
        style={{ background: `${props.color}`, marginTop: "10px" }}
      >
        <div className="title-with-icon">
          <div className="title" style={titleStyles}>
            {props.title}
          </div>
          <div className="access-card">
            <div className="circle">
              <div style={{ paddingTop: "3px" }}>{props.number}</div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginLeft: "20px",
            marginRight: "15px",
            color: `${props.textColor}`,
          }}
        >
          {props.text}
        </div>
      </div>
    </>
  )
}

export default VisionCard
