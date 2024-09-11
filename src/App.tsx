import { useState, useEffect, useRef } from 'react';
import Navbar from './assets/Navbar';
import Content1 from './assets/Content1';
import Content2 from './assets/Content2';
import Services from './assets/Services';
import Portfolio from './assets/Portfolio';
import Clients from './assets/Clients';
// import { db } from './assets/firebaseConnect';
// import {
//   collection,
//   getDocs,
//   // addDoc,
//   // deleteDoc,
//   // doc,
//   // updateDoc,
// } from 'firebase/firestore';
import Questions from './assets/Questions';
import Team from './assets/Team';
import Contact from './assets/Contact';
import Footer from './assets/Footer';

function App() {
  // const [newName, setNewName] = useState('');
  // const [newAge, setNewAge] = useState(0);
  // const [users, setUsers] = useState<any[]>([]);
  // const [eventUpdate, setEventUpdate] = useState(false);
  // const userCollectionRef = collection(db, 'users');
  // const [changeUser, setChangeUser] = useState(false);
  // const [getValueId, setGetValueId] = useState('');
  // const porfolioCollectionRef = collection(db, 'porfolioItems');
  const [porfolioItems, setPorfolioItems] = useState<any[]>([]);
  const [loadingporfolio, setLoadingporfolio] = useState(false);
  const refTeam = useRef<null | HTMLElement>(null);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(userCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getUsers();
  // }, [eventUpdate]);

  // const createUser = async () => {
  //   await addDoc(userCollectionRef, { name: newName, age: Number(newAge) });

  //   setNewName('');
  //   setNewAge(0);

  //   setEventUpdate((old) => !old);
  // };

  // const deleteUser = async (id: any) => {
  //   const newFeild = doc(userCollectionRef, id);
  //   await deleteDoc(newFeild);

  //   setEventUpdate((old) => !old);
  // };

  // const changeMode = async (user: any) => {
  //   setNewName(user.name);
  //   setNewAge(user.age);
  //   setGetValueId(user.id);
  //   setChangeUser(true);
  // };

  // const updateUser = async () => {
  //   const newFeild = doc(userCollectionRef, getValueId);
  //   await updateDoc(newFeild, { name: newName, age: newAge });

  //   setGetValueId('');
  //   setEventUpdate((old) => !old);
  //   setChangeUser(false);
  // };

  const dataPorfolioItems = [
    {
      Content: 'Lorem ipsum, dolor sit amet consectetur',
      ImageSource: 'images/branding-1.jpg',
      Title: 'Branding 1',
    },
    {
      Content: 'Lorem ipsum, dolor sit amet consectetur',
      ImageSource: 'images/product-1.jpg',
      Title: 'Product 1',
    },
    {
      Content: 'Lorem ipsum, dolor sit amet consectetur',
      ImageSource: 'images/books-3.jpg',
      Title: 'Book 3',
    },
    {
      Content: 'Lorem ipsum, dolor sit amet consectetur',
      ImageSource: 'images/app-3.jpg',
      Title: 'App 3',
    },
    {
      Content: 'Lorem ipsum, dolor sit amet consectetur',
      ImageSource: 'images/books-1.jpg',
      Title: 'Book 1',
    },
    {
      Content: 'Lorem ipsum, dolor sit amet consectetur',
      ImageSource: 'images/branding-2.jpg',
      Title: 'Branding 2',
    },
    {
      Content: 'Lorem ipsum, dolor sit amet consectetur',
      ImageSource: 'images/branding-3.jpg',
      Title: 'Branding 3',
    },
    {
      Content: 'Lorem ipsum, dolor sit amet consectetur',
      ImageSource: 'images/product-3.jpg',
      Title: 'Product 3',
    },
    {
      Content: 'Lorem ipsum, dolor sit amet consectetur',
      ImageSource: 'images/app-2.jpg',
      Title: 'App 2',
    },
    {
      Content: 'Lorem ipsum, dolor sit amet consectetur',
      ImageSource: 'images/product-2.jpg',
      Title: 'Product 2',
    },
    {
      Content: 'Lorem ipsum, dolor sit amet consectetur',
      ImageSource: 'images/app-1.jpg',
      Title: 'App 1',
    },
    {
      Content: 'Lorem ipsum, dolor sit amet consectetur',
      ImageSource: 'images/books-2.jpg',
      Title: 'Book 2',
    },
  ];

  useEffect(() => {
    // const getItems = async () => {
    //   const getData = await getDocs(porfolioCollectionRef);
    //   setPorfolioItems(
    //     getData.docs.map((data) => ({ ...data.data(), id: data.id }))
    //   );
    //   setLoadingporfolio(true);
    // };
    // getItems();
    setPorfolioItems(dataPorfolioItems.map((item) => ({ ...item })));
    setLoadingporfolio(true);
  }, []);

  const ScrollTeamComponent = () => {
    // console.log('Goto Team Page');
    refTeam.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar ScrollTeamComponent={ScrollTeamComponent}></Navbar>
      <Content1 />
      <Content2 />
      <Services />
      {loadingporfolio && <Portfolio itemData={porfolioItems} />}
      <Questions />
      <Team refTeam={refTeam} />
      <Clients />
      <Contact />
      <Footer />
    </div>
    // <div className="font-display p-5 w-[550px]">
    //   <section className="flex justify-between *:border-2 *:border-black/75 *:rounded-md *:px-2">
    //     <input
    //       className=""
    //       placeholder="Name..."
    //       onChange={(e) => setNewName(e.target.value)}
    //       value={newName}
    //     ></input>
    //     <input
    //       className=""
    //       type="number"
    //       placeholder="Age..."
    //       onChange={(e) => setNewAge(Number(e.target.value))}
    //       value={newAge}
    //     ></input>
    //     <button
    //       className=""
    //       onClick={() => (changeUser === false ? createUser() : updateUser())}
    //     >
    //       {changeUser === false ? 'Create' : 'Change'}
    //     </button>
    //   </section>
    //   <section className="w-full mt-2">
    //     {users.map((user, index) => {
    //       return (
    //         <div key={user.id} className="mb-3">
    //           <h1>
    //             {index + 1}. {user.name} {user.age}{' '}
    //             <button
    //               className="bg-red-400 text-white px-1.5 rounded-md hover:bg-red-600"
    //               onClick={() => deleteUser(user.id)}
    //             >
    //               Delete
    //             </button>
    //             <button
    //               className="bg-blue-500 text-white px-1.5 ml-3 rounded-md hover:bg-blue-600"
    //               onClick={() => changeMode(user)}
    //             >
    //               Update
    //             </button>
    //           </h1>
    //         </div>
    //       );
    //     })}
    //   </section>
    // </div>
  );
}

export default App;
