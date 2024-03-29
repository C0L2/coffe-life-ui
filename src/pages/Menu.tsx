import MenuCard from "../components/MenuCard"

const Menu = () => {
  return (
    <>
      <div className="menu-txt">
        <p style={{ paddingTop: "53px", paddingBottom: "40px" }}>menu</p>
        <MenuCard
          title="Ask a question"
          title_ru="Задай свой вопрос"
          title_ro="Pune o întrebare"
          link="ask-question"
          color="#F4F389"
        />
        <MenuCard
          title="Meet a new friend"
          title_ru="Познакомься с ..."
          title_ro="Faceți cunoștință cu ..."
          link="meet-a-friend"
          color="#DC7755"
        />
        {/* <MenuCard
          title="Quiz"
          title_ru="Пройти опрос"
          title_ro="Treceți sondajul"
          link="take-a-quiz"
          color="#4DDEB0"
        /> */}
        <MenuCard
          title="Coffee & Life vision"
          title_ru="Познакомься с нами"
          title_ro="Cunoaște-ne"
          link="vision"
          color="#7C83A8"
        />
      </div>
      <p className="paragraf-bottom-special">Coffee & Life</p>
    </>
  )
}

export default Menu
