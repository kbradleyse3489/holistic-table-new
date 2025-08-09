import './AppStyles.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
        <nav className="navbar">
          <img
            src={process.env.PUBLIC_URL + '/The holistic table logo.png'}
            alt="The Holistic Table by KB Logo"
            className="navbar-logo"
          />
          <NavLink to="/" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>About</NavLink>
          <NavLink to="/menu" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>VIP Glow Kitchen</NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Shop</NavLink>
          <NavLink to="/subscriptions" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Subscriptions</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Services</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Blog</NavLink>
          <NavLink to="/testimonials" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Testimonials</NavLink>
          <NavLink to="/faqs" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>FAQs</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Contact</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <section style={{ textAlign: 'center', padding: '48px 0 32px 0', background: '#f5f5f5' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h1 className="brand-title" style={{ fontSize: '2.8rem', marginBottom: 16 }}>Where Elevated Indulgence Meets Everyday Wellness.</h1>
          <p className="brand-tagline" style={{ fontSize: '1.3rem', marginBottom: 32 }}>
            Rooted in herbal wellness and mindful living complemented by nourishing vegan meals.
          </p>
          {/* Featured image placeholder */}
          <div style={{ margin: '0 auto 32px auto', maxWidth: 400 }}>
            <img 
              src={process.env.PUBLIC_URL + '/featured-placeholder.jpg'} 
              alt="Featured vegan meal or product" 
              style={{ width: '100%', borderRadius: 18, boxShadow: '0 4px 24px rgba(74,124,89,0.08)' }} 
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>
          <NavLink to="/shop" className="navbar-link active" style={{
            display: 'inline-block',
            background: '#4A7C59',
            color: '#fff',
            padding: '14px 36px',
            borderRadius: 30,
            fontSize: 20,
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
            marginTop: 12
          }}>
            Shop Now
          </NavLink>
        </div>
      </section>

      {/* Featured Products Section */}
      <section style={{ background: '#fff', padding: '48px 0 56px 0', borderTop: '1px solid #e0e0e0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', color: '#4A7C59', fontSize: '2rem', marginBottom: 32, textAlign: 'center' }}>
            Featured Products
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
            {/* Product 1 */}
            <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center' }}>
              <div style={{ marginBottom: 18 }}>
                <img src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80" alt="Vitality Glow Seamoss Gel" style={{ width: '100%', borderRadius: 12, height: 160, objectFit: 'cover', background: '#eee' }} />
              </div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', color: '#4A7C59', fontSize: '1.3rem', marginBottom: 6 }}>Vitality Glow Seamoss Gel – Pineapple Ginger</h3>
              <div style={{ color: '#888', fontSize: 16, marginBottom: 4 }}>$22 <span style={{ fontWeight: 400, fontSize: 14 }}>(16 oz jar)</span></div>
              <div style={{ fontStyle: 'italic', color: '#4A7C59', fontSize: 15, marginBottom: 10 }}>
                “A tropical boost for your body, beauty, and energy.”
              </div>
              <div style={{ color: '#222', fontSize: 15, marginBottom: 0 }}>
                Our signature small batch seamoss gel infused with fresh pineapple and warming ginger for a naturally sweet, mineral-rich boost. Perfect for adding to smoothies, teas, or enjoying by the spoonful to support immunity, digestion, and glowing skin.
              </div>
            </div>
            {/* Product 2 */}
            <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center' }}>
              {/* Calm & Restore Herbal Tea Blend Photo Placeholder */}
              <div style={{ marginBottom: 18 }}>
                <div style={{ height: 160, background: '#e0efe6', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 16 }}>
                  Photo Placeholder: Calm & Restore Herbal Tea Blend
                </div>
              </div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', color: '#4A7C59', fontSize: '1.3rem', marginBottom: 6 }}>Calm & Restore Herbal Tea Blend</h3>
              <div style={{ color: '#888', fontSize: 16, marginBottom: 4 }}>$12 <span style={{ fontWeight: 400, fontSize: 14 }}>(8 oz loose leaf)</span></div>
              <div style={{ fontStyle: 'italic', color: '#4A7C59', fontSize: 15, marginBottom: 10 }}>
                “Unwind, sip, and let the day melt away.”
              </div>
              <div style={{ color: '#222', fontSize: 15, marginBottom: 0 }}>
                A soothing blend of chamomile, lavender, and lemon balm crafted to relax the mind, calm the body, and prepare you for restorative sleep. Sustainably sourced and hand-blended for maximum freshness and potency.
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
function About() {
  return (
    <div style={{ padding: '48px 16px', maxWidth: 800, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      {/* Inspiring wellness image (Unsplash, royalty-free) */}
      <div style={{ width: '100%', maxWidth: 600, margin: '0 auto 32px auto' }}>
        <img
          src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=900&q=80"
          alt="Fresh parsley herb on a clean background"
          style={{ width: '100%', borderRadius: 18, boxShadow: '0 4px 24px rgba(74,124,89,0.08)' }}
        />
      </div>
      <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 24 }}>Welcome to The Holistic Table by KB</h2>
      <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#222', marginBottom: 18 }}>
        The Holistic Table by KB is more than a brand, it’s a sanctuary for those who want to live well, feel well, and do it beautifully. Everything we create is rooted in herbal wisdom, natural wellness practices, and mindful living, brought together with a touch of everyday luxury.
      </p>
      <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#222', marginBottom: 18 }}>
        Our story began as KB’s Vegan Kitchen, a beloved local source for fresh, plant-based meals that nourished the body and delighted the taste buds. Over time, we realized our vision was bigger than food alone. It was about creating a full-circle lifestyle experience that embraced herbs, natural remedies, plant-based skincare, and holistic living. That’s when The Holistic Table by KB was born, a refined and elevated evolution of our original passion, blending the best of our food roots with a broader wellness mission.
      </p>
      <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#222', marginBottom: 18 }}>
        Our offerings are intentionally crafted in small batches from herbal blends and seamoss infusions to plant-based skincare and nourishing vegan meals, so every product feels personal and purposeful. We choose premium, ethically sourced ingredients that respect both your body and the Earth, ensuring that wellness never comes at the cost of quality.
      </p>
      <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#222', marginBottom: 18 }}>
        Here, we believe in turning daily rituals into moments of care. Whether you’re restoring your energy with a herbal tonic, adding vitality with a seamoss creation, or enjoying one of our signature bowls, each experience is designed to elevate your well-being and inspire a deeper connection to yourself.
      </p>
      <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#222', marginBottom: 0 }}>
        Welcome to a table where nature, nourishment, and intentional living meet, and you always have a seat.
      </p>

      {/* Learn More Section */}
      <div style={{ marginTop: 48, padding: '32px 0 0 0', borderTop: '1px solid #e0e0e0' }}>
        <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', fontSize: '1.6rem', color: '#4A7C59', marginBottom: 16 }}>Learn More</h3>
        <p style={{ fontSize: '1.08rem', lineHeight: 1.7, color: '#222', marginBottom: 18 }}>
          Curious about our roots, our process, and what makes The Holistic Table by KB unlike anything else?
        </p>
        <div style={{ fontSize: '1.08rem', lineHeight: 1.7, color: '#222', marginBottom: 18, paddingLeft: 0 }}>
          <div style={{ marginBottom: 24 }}>
            <b>How We Transform Herbal Traditions into Modern Wellness Rituals</b>
            <p style={{ margin: '8px 0 0 0' }}>
              At The Holistic Table by KB, herbs aren’t just ingredients, they’re the foundation of every product we create. I am certified in Chinese Medicine and Holistic Health, allowing me to draw on both ancient healing traditions and modern science to craft remedies that truly work. Every blend is intentionally balanced, whether it’s a seamoss infusion rich in minerals or an herbal tea meant to calm your evening routine. My mission is simple, to make holistic wellness practical, luxurious, and effective for the modern world.
            </p>
          </div>
          <div style={{ marginBottom: 24 }}>
            <b>Why Our Products Are Always Crafted in Small Batches for Maximum Potency and Freshness</b>
            <p style={{ margin: '8px 0 0 0' }}>
              We believe in slow-made wellness. That means we prepare every product in small batches so that herbs are vibrant, textures are perfect, and nutrients remain intact. This approach lets us hand-select premium ingredients, avoid unnecessary preservatives, and maintain the kind of quality that mass production can’t match. As a Certified Health and Wellness Coach and Certified Fitness Instructor along with my husband, I ensure that every creation supports balance, nourishment, and lasting vitality. Each jar, bottle, or bowl is the result of patience, precision, and a deep respect for what your body deserves.
            </p>
          </div>
          <div style={{ marginBottom: 24 }}>
            <b>The Journey from KB’s Vegan Kitchen to an Elevated Holistic Lifestyle Brand</b>
            <p style={{ margin: '8px 0 0 0' }}>
              The Holistic Table by KB grew from my passion for wellness into a lifestyle brand that extends far beyond food. While KB’s Vegan Kitchen was loved for its nourishing meals, The Holistic Table embraces a full-circle approach, adding herbal remedies, plant-based skincare, and holistic resources to help people care for themselves inside and out. Guided by my certifications in Chinese Medicine, Holistic Health, Health Coaching, and Fitness Instruction, we have expanded into a space where flavor, beauty, and well-being live side by side.
            </p>
          </div>
          <div style={{ marginBottom: 24 }}>
            <b>Our Commitment to Eco-Conscious Sourcing and Community Wellness</b>
            <p style={{ margin: '8px 0 0 0' }}>
              We see wellness as a relationship between people and the planet. Our herbs and ingredients are sourced from suppliers who prioritize ethical harvesting and sustainable farming. Our packaging is chosen with the environment in mind, from recyclable materials to minimal-waste options. Beyond that, we are committed to education, hosting workshops, sharing resources, and creating opportunities for our community to embrace wellness as a lifelong journey.
            </p>
          </div>
        </div>
        <a href="https://voyagedenver.com/interview/meet-keisha-bradley-of-kbs-vegan-kitchen/" target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-block',
          background: '#4A7C59',
          color: '#fff',
          padding: '10px 28px',
          borderRadius: 24,
          fontSize: 18,
          fontWeight: 700,
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
          marginBottom: 24
        }}>Read more</a>
      </div>

      {/* Our Story Timeline */}
      <div id="our-story" style={{ marginTop: 48 }}>
        <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', fontSize: '1.4rem', color: '#4A7C59', marginBottom: 16 }}>Our Story</h3>
        <ul style={{ fontSize: '1.08rem', lineHeight: 1.7, color: '#222', marginBottom: 0, paddingLeft: 24 }}>
          <li><b>2020 – Humble Beginnings in Denver</b><br />In a small apartment in Denver, we began creating vegan meals and nutrient-rich seamoss for friends, family, and local customers, all made with love and delivered straight from our home kitchen.</li>
          <li style={{ marginTop: 12 }}><b>2021 – Hitting the Streets</b><br />We started doing pop-up events across the city, sharing our food and holistic products with new communities. Our dedication and bold flavors soon caught attention, and we were featured in several local magazines for our fresh, intentional approach to wellness.</li>
          <li style={{ marginTop: 12 }}><b>2022 – Changing Lives Through Meal Prep</b><br />Word spread about our nourishing weekly meal preps, and we watched lives transform from busy parents finding healthier eating habits to professionals reclaiming their energy and wellness.</li>
          <li style={{ marginTop: 12 }}><b>2023 – Serving at a Higher Level</b><br />We secured government contracts, one of the most impactful being St. Francis Hospital’s Ornish Program. In this heart-focused lifestyle program, we were the main cook and provider, serving individuals committed to reversing heart disease and improving overall health through plant-based eating, stress management, and movement. We witnessed remarkable progress in participants, from weight loss and lower blood pressure to a renewed joy for life.</li>
          <li style={{ marginTop: 12 }}><b>2025 – The Evolution: The Holistic Table by KB</b><br />After years of growth, impact, and community love, we knew it was time to expand beyond food. Drawing from our herbal knowledge, wellness experience, and creative vision, we evolved into The Holistic Table by KB, a place where herbal remedies, natural skincare, plant-based meals, and mindful living come together in one elevated lifestyle brand.</li>
          <li style={{ marginTop: 12 }}><b>Today – The Full Circle Moment</b><br />I am thriving in my career in tech while on the path to be a Data Scientist, and my passion for helping people live healthier, more balanced lives has never faded. With a little extra time and a renewed vision, we have relaunched and revamped, bringing you a brand that nourishes the body, inspires the mind, and cares for the spirit.</li>
        </ul>
      </div>
    </div>
  );
}
function Menu() {
  return (
    <div style={{ padding: '48px 16px', maxWidth: 900, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 24 }}>🌿 The Glow Bowl Collection <span style={{ fontSize: '1.1rem', color: '#888' }}>(Exclusive to The Holistic Table by KB VIP Club)</span></h2>
      {/* Glow Bowls */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
        {/* Glow Goddess Bowl */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            Image Placeholder: Bright, colorful bowl with greens, sweet potatoes, and avocado slices
          </div>
          <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', marginBottom: 6 }}>Glow Goddess Bowl <span style={{ color: '#888', fontWeight: 400, fontSize: 16 }}>$14</span></h3>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 0 }}>
            Quinoa, roasted sweet potatoes, chickpeas, steamed kale, avocado, pomegranate seeds, and tahini-lemon dressing.
          </div>
        </div>
        {/* Herbal Harvest Bowl */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            Image Placeholder: Rustic-style bowl with roasted vegetables and lentils
          </div>
          <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', marginBottom: 6 }}>Herbal Harvest Bowl <span style={{ color: '#888', fontWeight: 400, fontSize: 16 }}>$14</span></h3>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 0 }}>
            Brown rice, grilled zucchini, roasted carrots, marinated lentils, microgreens, hemp seeds, and rosemary-garlic vinaigrette.
          </div>
        </div>
        {/* Immunity Boost Bowl */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            Image Placeholder: Vibrant yellow dressing over hearty grains and veggies
          </div>
          <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', marginBottom: 6 }}>Immunity Boost Bowl <span style={{ color: '#888', fontWeight: 400, fontSize: 16 }}>$15</span></h3>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 0 }}>
            Wild rice, sautéed broccoli, ginger-garlic mushrooms, roasted beets, pumpkin seeds, and turmeric-citrus dressing.
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', marginBottom: 18 }}>✨ Coming Soon to the Collection</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
        {/* Sun-Kissed Citrus Bowl */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            Image Placeholder: Bowl with bright greens, yellow corn, and juicy orange slices
          </div>
          <h4 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', marginBottom: 6 }}>Sun-Kissed Citrus Bowl <span style={{ color: '#888', fontWeight: 400, fontSize: 15 }}>$14</span></h4>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 0 }}>
            Quinoa, roasted asparagus, grilled zucchini, sweet corn, orange segments, and a citrus-mint dressing.
          </div>
        </div>
        {/* Green Energy Bowl */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            Image Placeholder: All-green ingredients with a drizzle of pale green sauce
          </div>
          <h4 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', marginBottom: 6 }}>Green Energy Bowl <span style={{ color: '#888', fontWeight: 400, fontSize: 15 }}>$14</span></h4>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 0 }}>
            Brown rice, sautéed kale, edamame, avocado, cucumber ribbons, and a creamy matcha-tahini sauce.
          </div>
        </div>
        {/* Spiced Autumn Glow Bowl */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            Image Placeholder: Warm golden and deep green colors with bright red cranberries
          </div>
          <h4 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', marginBottom: 6 }}>Spiced Autumn Glow Bowl <span style={{ color: '#888', fontWeight: 400, fontSize: 15 }}>$15</span></h4>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 0 }}>
            Farro, roasted butternut squash, Brussels sprouts, cranberries, and cinnamon-maple dressing.
          </div>
        </div>
      </div>

      {/* VIP Club Perks */}
      <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', marginBottom: 12 }}>VIP Club Perks</h3>
      <ul style={{ color: '#222', fontSize: 15, marginBottom: 32, paddingLeft: 24 }}>
        <li>Access to exclusive, rotating Glow Bowls each month</li>
        <li>Priority ordering and guaranteed availability</li>
        <li>Member-only seasonal ingredients and flavors</li>
      </ul>

      {/* Special Notes */}
      <h4 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', marginBottom: 8 }}>Special Notes</h4>
      <ul style={{ color: '#222', fontSize: 15, marginBottom: 0, paddingLeft: 24 }}>
        <li>All bowls are 100% vegan & dairy-free</li>
        <li>Gluten-free upon request</li>
        <li>Prepared fresh with premium, small-batch ingredients</li>
      </ul>
    </div>
  );
}
function Shop() { return <div style={{ padding: 40 }}><h2>Shop</h2><p>Shop for sea moss, snacks, skincare, and digital products.</p></div>; }
function Subscriptions() { return <div style={{ padding: 40 }}><h2>Subscriptions</h2><p>Meal plans, wellness boxes, and memberships.</p></div>; }
function Services() { return <div style={{ padding: 40 }}><h2>Services</h2><p>Consulting, classes, workshops, and catering.</p></div>; }
function Blog() { return <div style={{ padding: 40 }}><h2>Blog</h2><p>Recipes, wellness tips, and holistic living guides.</p></div>; }
function Testimonials() { return <div style={{ padding: 40 }}><h2>Testimonials</h2><p>Photos and quotes from happy customers.</p></div>; }
function FAQs() { return <div style={{ padding: 40 }}><h2>FAQs</h2><p>Order process, shipping, and common questions.</p></div>; }
function Contact() { return <div style={{ padding: 40 }}><h2>Contact</h2><p>Email form, phone, and social links.</p></div>; }

export default App;
