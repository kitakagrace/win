
      
  // Push Function
  const [firstname, setfirstname] = useState("")
  const [secondname, setsecondname] = useState("")
  
const createClient = () => {
  const uuid = uid();
  set(ref(db, `/${uuid}`),{
    firstname,
    secondname,
    uuid
  })

}