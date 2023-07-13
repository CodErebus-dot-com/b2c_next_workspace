const Login = () => {
  return (
    <>
        <div id='api'></div>
        <h2>Test login</h2>
        <script data-test-id="test-script" dangerouslySetInnerHTML={{__html: `
            function addClasses() {
                const h2Elem = document.querySelector('.intro')
                h2Elem.classList.add('test-class');
            }

            addClasses();
            `
            }} 
        />
    </>
  )
}

export default Login