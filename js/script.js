// Services selector

function switchContent(contentId) {
  const servicesGrid = document.querySelector('.services__grid');
  const buttons = document.querySelectorAll('.services__selector .button');

  buttons.forEach((button) => {
    button.classList.remove('button_selected');
    if (button.id === contentId) {
      button.classList.add('button_selected');
    }
  });

  switch (contentId) {
    case 'web_design':
      servicesGrid.innerHTML = `

          <div class="services__service services__service_orange">
          <h3>User-Centered Design</h3>
          <p>
            We create websites that are intuitive and easy to navigate, with a focus on the user experience. Our
            design process starts with understanding the target audience and their needs, preferences, and behaviors.
          </p>
        </div>
        <div class="services__service services__service_green">
          <h3>Responsive Design</h3>
          <p>
            We ensure that all websites we design are fully responsive and mobile-friendly, providing an optimal viewing experience on any device.
          </p>
        </div>
        <div class="services__service services__service_blue">
          <h3>Custom Design</h3>
          <p>
            We create custom website designs that are unique to each client, based on their brand identity, business objectives, and target audience.
          </p>
        </div>
        <div class="services__service services__service_purple">
          <h3>SEO-friendly Design</h3>
          <p>
            Our websites are designed with search engine optimization in mind, with an emphasis on clean code, fast loading times, and easy navigation.
          </p>
        </div>
        <div class="services__service services__service_brown">
          <h3>Content Management System Integration</h3>
          <p>
            We integrate content management systems (CMS) such as WordPress, Drupal, or Joomla into our designs.
          </p>
        </div>
        `;
      break;
    case 'software_dev':
      servicesGrid.innerHTML = `
            <div class="services__service services__service_orange">
          <h3>Custom Software Development</h3>
          <p>
          We specialize in developing custom software solutions tailored to our clients' specific needs. Our development team uses the latest technologies and development methodologies to ensure that our software solutions are robust, scalable, and maintainable.
          </p>
        </div>
        <div class="services__service services__service_green">
          <h3>Web Application Development</h3>
          <p>
          We develop web applications that are user-friendly, responsive, and scalable. Our web application development services cover the full spectrum of the development lifecycle, from requirements gathering to deployment and maintenance.

          </p>
        </div>
        <div class="services__service services__service_blue">
          <h3>Mobile Application Development</h3>
          <p>
          We develop mobile applications for both iOS and Android platforms. Our mobile application development services include design, development, testing, and deployment.
          </p>
        </div>
        <div class="services__service services__service_purple">
          <h3>Software Integration</h3>
          <p>
          We provide software integration services to help our clients integrate their existing software systems with new software solutions. Our integration services cover all aspects of the integration process, including design, development, testing, and deployment.
          </p>
        </div>
        <div class="services__service services__service_brown">
          <h3>Software Maintenance and Support</h3>
          <p>
          We provide ongoing maintenance and support services to ensure that our clients' software solutions are up-to-date, secure, and reliable. Our maintenance and support services include bug fixes, security patches, and feature enhancements.
          </p>
        </div>
            `;
      break;
    case 'automation':
      servicesGrid.innerHTML = `
            <div class="services__service services__service_orange">
          <h3>Business Process Analysis</h3>
          <p>
          We start by analyzing our clients' business processes to identify areas where automation can improve efficiency and reduce costs. Our team of experts has extensive experience in business process analysis and uses the latest tools and techniques to identify opportunities for automation.
          </p>
        </div>
        <div class="services__service services__service_green">
          <h3>Workflow Automation</h3>
          <p>
          We develop customized workflow automation solutions that automate repetitive and manual tasks, such as data entry, report generation, and document processing. Our workflow automation solutions are designed to integrate seamlessly with our clients' existing software systems.
          </p>
        </div>
        <div class="services__service services__service_blue">
          <h3>Robotic Process Automation (RPA)</h3>
          <p>
          We use robotic process automation (RPA) to automate tasks that require human intervention, such as data extraction and data processing. Our RPA solutions are designed to improve accuracy, reduce errors, and increase efficiency.
          </p>
        </div>
        <div class="services__service services__service_purple">
          <h3>Integration with Existing Software Systems</h3>
          <p>
          We integrate our automation solutions with our clients' existing software systems to ensure seamless workflow and data exchange. Our integration services cover all aspects of the integration process, including design, development, testing, and deployment.
          </p>
        </div>
            `;
      break;
    case 'data_analysis':
      servicesGrid.innerHTML = `
            <div class="services__service services__service_orange">
          <h3>Data Modeling</h3>
          <p>
          We develop customized data models that help our clients make informed decisions based on accurate and relevant data. Our data modeling services cover all aspects of the modeling process, including data preparation, model selection, and validation.
          </p>
        </div>
        <div class="services__service services__service_green">
          <h3>Data Visualization</h3>
          <p>
          We develop customized data visualization solutions that make it easy for our clients to understand complex data sets. Our data visualization solutions are designed to be user-friendly, interactive, and informative.
          </p>
        </div>
        <div class="services__service services__service_blue">
          <h3>Statistical Analysis</h3>
          <p>
          We use advanced statistical analysis techniques to identify trends, patterns, and relationships in data sets. Our statistical analysis services include hypothesis testing, regression analysis, and time series analysis.
          </p>
        </div>
        <div class="services__service services__service_purple">
          <h3>Business Intelligence</h3>
          <p>
          We provide customized business intelligence solutions that help our clients make informed decisions based on accurate and timely data. Our business intelligence solutions include data warehousing, data integration, and data reporting.

          </p>
        </div>
            `;
      break;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  switchContent('web_design');

  document.querySelectorAll('.services__selector .button').forEach((button) => {
    button.addEventListener('click', () => {
      switchContent(button.id);
    });
  });
});


// Contact form

function sendEmailUsingMailto(event) {
  event.preventDefault();
  const form = event.target;

  const formData = new FormData(form);
  const subject = formData.get("subject");
  const message = formData.get("message");

  const mailtoLink = `mailto:test@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  window.open(mailtoLink);
}

// Smooth scroll
function scrollTo(targetElement) {
  targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Hamburger menu

document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');

  function toggleMobileMenu() {
    var iconHamburger = document.querySelector('.icon_hamburger');
    var iconClose = document.querySelector('.icon_close');

    hamburger.classList.toggle('hamburger_cross');
    mobileMenu.classList.toggle('mobile-menu_open');

    if (mobileMenu.classList.contains('mobile-menu_open')) {
      iconHamburger.style.display = 'none';
      iconClose.style.display = 'inline-block';
    } else {
      iconHamburger.style.display = 'inline-block';
      iconClose.style.display = 'none';
    }
  }

  hamburger.addEventListener('click', toggleMobileMenu);

  mobileMenuLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var targetId = link.getAttribute('href');
      var targetElement = document.querySelector(targetId);
  
      scrollTo(targetElement);
  
      toggleMobileMenu();
    });
  });
});
