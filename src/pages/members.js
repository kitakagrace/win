import { useEffect} from 'react';
import {db} from '../firebase'
import { onValue, ref } from 'firebase/database';

export default function Members()  {
 // const [members, setMembers] = useState([]);
useEffect(() =>{

onValue(ref(db), snapshot => {
  let data = [];
  snapshot.forEach((childSnapshot) => {
    const memberList = childSnapshot.val();
    data.push(memberList);
  });
  console.log(data);
  // setMembers(data);
});
},[])


  return (
    <div>
      
      
   </div>
  );
  }
