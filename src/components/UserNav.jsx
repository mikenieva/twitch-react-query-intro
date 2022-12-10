
export default function UserPicker({userId, setUserId}){

    return (
        <ul>
          <li>
            <button
              onClick={() => setUserId("user1")}
              style={{ fontWeight: userId === "user1" ? 800 : 400 }}
            >
              User 1
            </button>
          </li>
          <li>
            <button
              onClick={() => setUserId("user2")}
              style={{ fontWeight: userId === "user2" ? 800 : 400 }}
            >
              User 2
            </button>
          </li>
          <li>
            <button
              onClick={() => setUserId("user3")}
              style={{ fontWeight: userId === "user3" ? 800 : 400 }}
            >
              User 3
            </button>
          </li>
        </ul>
      );


}