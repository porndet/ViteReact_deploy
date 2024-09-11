import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = ({ ScrollTeamComponent }: any) => {
  const items = [
    ['Home', ScrollTeamComponent],
    ['About', ScrollTeamComponent],
    ['Services', ScrollTeamComponent],
    ['Portfolio', ScrollTeamComponent],
    ['Team', ScrollTeamComponent],
    ['Dropdown', ScrollTeamComponent],
    ['Contact', ScrollTeamComponent],
  ];

  return (
    <>
      <section className="bg-white h-20 shadow-md flex justify-between items-center px-12">
        <div className="text-2xl navbarfont:text-3xl text-fontText">
          Ninestars
        </div>
        <div className="flex navbarfont:gap-7 items-center gap-4">
          <section className="hidden navbarhidden:flex navbarfont:gap-7 navbarfont:text-lg text-md gap-4">
            {items.map((item) =>
              item[0] === 'Dropdown' ? (
                <span
                  key={item[0]}
                  onClick={ScrollTeamComponent}
                  className=" hover:text-orange-500 cursor-pointer"
                >
                  {item[0]}
                  <FontAwesomeIcon icon="angle-down" className="text-lg pl-1" />
                </span>
              ) : (
                <span
                  key={item[0]}
                  onClick={item[1]}
                  className=" hover:text-orange-500 cursor-pointer"
                >
                  {item[0]}
                </span>
              )
            )}
          </section>
          <section className="flex navbarhidden:hidden">
            <FontAwesomeIcon icon="bars" className="text-xl md:text-3xl" />
          </section>
          <button className="bg-orange-600 py-2 navbarfont:px-5 rounded-full text-white text-sm navbarfont:text-lg px-3">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default Navbar;
