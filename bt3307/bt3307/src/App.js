import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

function App() {
  const [studentList, setStudentList] = useState([])

  useEffect(() => {
    return () => {
      let stdList = []
      for (var i = 0; i < 10; i++) {
        "fullname": "Tran Van" + i,
        "age": 20 + i,
        "address": "Ha Noi",
        "email": "tranvan" + i + "@gmail.com" 
      }
    }
    setStudentList = ([...stdList])
  } [])


  return (
    <>
      <div class="container">
        <h2>Table</h2>
        <p>The .table-bordered class adds border on all sides of the table and cells:</p>                        
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>STT</th>
              <th>Ten</th>
              <th>Tuoi</th>
              <th>Dia chi</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            student
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
