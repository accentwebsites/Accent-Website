export function renderFooter() {
    return `
      <footer class="bg-gray-800 text-white py-12">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-xl font-bold mb-4">TechFlow</h3>
              <p class="text-gray-400">Building better software solutions</p>
            </div>
            <div>
              <h4 class="font-bold mb-4">Services</h4>
              <ul class="space-y-2 text-gray-400">
                <li>Custom Development</li>
                <li>Cloud Solutions</li>
                <li>Digital Transformation</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-4">Company</h4>
              <ul class="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-4">Contact</h4>
              <ul class="space-y-2 text-gray-400">
                <li>info@techflow.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    `;
  }