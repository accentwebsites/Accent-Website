export function renderNavigation() {
    return `
      <nav class="bg-white shadow-lg fixed w-full z-10">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex justify-between items-center h-16">
            <div class="text-2xl font-bold text-blue-600">TechFlow</div>
            <div class="hidden md:flex space-x-8">
              <a href="#" class="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#services" class="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" class="text-gray-700 hover:text-blue-600">About</a>
              <a href="#contact" class="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    `;
  }