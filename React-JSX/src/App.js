import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="task-manager">
      <div className="header">
        <h1>Task Manager - ASHUHRASHA INNOVATIONS</h1>
      </div>

      <div className="task-view">
        <table>
          <tr>
            <th>#</th>
            <th>Task Name</th>
            <th>Status</th>
            <th>Deadline</th>
          </tr>

          <tr>
            <td>1</td>
            <td>Create a youtube video</td>
            <td>Progress</td>
            <td>28/10/2023</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Create a youtube video on reactjs</td>
            <td>Incomplete</td>
            <td>29/10/2023</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
