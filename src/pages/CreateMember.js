import {db} from '../firebase'
import {uid} from 'uid'
import {set, ref} from 'firebase/database'
import {useState } from 'react'


export default function SignUp() {

  const [firstname, setFirstName] = useState("")
  const [secondname, setSecondName] = useState("")
  const [emailaddress, setEmailAddress] = useState("")
  const [deposit, setDeposit] = useState("")

const createMember = () => {
  const uuid = uid();
  set(ref(db, `members/${uuid}`),{
    firstname,
    secondname,
    deposit,
    emailaddress,
    uuid
  })


}

  return (
    <div>
      <input type="text"
      placeholder='First Name'
      value = {firstname}
      onChange={(e) => setFirstName(e.target.value)} />
      <input type="text"
      placeholder='Second Name'
      value = {secondname}
      onChange={(e) => setSecondName(e.target.value)} />
      <input type="text"
      placeholder='Email Address'
      value = {emailaddress}
      onChange={(e) => setEmailAddress(e.target.value)} />
      <input type="text"
      placeholder='Initial Deposit'
      value = {deposit}
      onChange={(e) => setDeposit(e.target.value)} />
      <button onClick={createMember}>Submit</button>
    </div>
  );
}