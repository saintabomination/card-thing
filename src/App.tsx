import Icon from './components/Icon/Icon.component';

const App = (): JSX.Element =>
  (
    <>
      <h1>John Doe</h1>
      <h2>Personal info</h2>
      <ul>
        <li>Age: 21</li>
        <li>Country: Poland</li>
        <li>Profession: Web Developer</li>
      </ul>
      <h2>Titles</h2>
      <ul>
        <li>Title 1</li>
        <li>Title 2</li>
        <li>Title 3</li>
      </ul>
      <h2>Contacts</h2>
      <ul>
        <li>
          <Icon name="instagram" type="fab" />
          <span>Instagram</span>
        </li>
        <li>
          <Icon name="linkedin" type="fab" />
          <span>LinkedIn</span>
        </li>
        <li>
          <Icon name="twitter" type="fab" />
          <span>Twitter</span>
        </li>
      </ul>
    </>
  );

export default App;
