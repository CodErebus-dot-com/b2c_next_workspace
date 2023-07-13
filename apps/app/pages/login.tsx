const Login = () => {
  return (
    <>
        <div id='api'></div>
        <h2>Test login</h2>
        <script data-test-id="test-script" dangerouslySetInnerHTML={{__html: `
            function addClasses() {
                const h2Elem = document.querySelector('.intro')
                h2Elem.classList.add('chakra-heading css-1dklj6k')
            }

            addClasses();
            `
            }} 
        />
    </>
  )
}

export default Login