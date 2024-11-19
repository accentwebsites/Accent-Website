export function renderServices() {
    return `
      <section id="services" class="section bg-gray-50">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-4xl font-bold text-center mb-16 text-gray-900">Our Services</h2>
          <div class="grid md:grid-cols-3 gap-8">
            ${renderServiceCard('Custom Software Development', 'Tailored solutions designed to meet your specific business needs')}
            ${renderServiceCard('Cloud Solutions', 'Scalable and secure cloud infrastructure for your applications')}
            ${renderServiceCard('Digital Transformation', 'Modernize your business with cutting-edge technology')}
          </div>
        </div>
      </section>
    `;
  }
  
  function renderServiceCard(title, description) {
    return `
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h3 class="text-xl font-bold mb-4 text-gray-900">${title}</h3>
        <p class="text-gray-600">${description}</p>
      </div>
    `;
  }