```javascript
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter

function MyComponent() {
  const router = useRouter(); // Initialize useRouter

  const handleClick = () => {
    router.push('/about'); // Use router.push for navigation
  };

  return (
    <div>
      <button onClick={handleClick}>About Us</button> {/* Button for navigation */}
    </div>
  );
}

export default MyComponent;
```