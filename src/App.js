import React, { useState } from 'react';
import './AppStyles.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
// --- Wellness Wins Page Component ---
function WellnessWins() {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '40px 0', fontFamily: 'Lora, Georgia, Times New Roman, serif' }}>
      <h1 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '2.3rem', marginBottom: 12, textAlign: 'center' }}>Wellness Wins</h1>
      <div style={{ fontSize: '1.18rem', color: '#222', marginBottom: 30, textAlign: 'center' }}>
        Real stories. Real results. See how our sea moss, holistic meals, and wellness products are transforming lives.
      </div>
      <h2 style={{ color: '#F9B233', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', marginBottom: 18, textAlign: 'center' }}>Featured Testimonials</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginBottom: 40 }}>
        <blockquote style={{ background: '#f8f8f8', borderLeft: '5px solid #F9B233', borderRadius: 12, padding: '18px 24px', fontStyle: 'italic', color: '#4A7C59', fontSize: 18 }}>
          “The sea moss advanced infinite age helps boost your immunity.”
          <div style={{ fontWeight: 500, color: '#888', fontSize: 15, marginTop: 8 }}>— Amazon Reviewer</div>
        </blockquote>
        <blockquote style={{ background: '#f8f8f8', borderLeft: '5px solid #F9B233', borderRadius: 12, padding: '18px 24px', fontStyle: 'italic', color: '#4A7C59', fontSize: 18 }}>
          “It’s excellent for easing cold and flu symptoms and boosting the immune system—perfect for the whole family!”
          <div style={{ fontWeight: 500, color: '#888', fontSize: 15, marginTop: 8 }}>— KB’s Vegan Kitchen Facebook Page</div>
        </blockquote>
        <blockquote style={{ background: '#f8f8f8', borderLeft: '5px solid #F9B233', borderRadius: 12, padding: '18px 24px', fontStyle: 'italic', color: '#4A7C59', fontSize: 18 }}>
          “Great for erectile dysfunction and Libido in both Men & Women.”
          <div style={{ fontWeight: 500, color: '#888', fontSize: 15, marginTop: 8 }}>— Facebook Group Feedback</div>
        </blockquote>
      </div>
      <div style={{ background: '#FFF8E7', borderRadius: 14, padding: '28px 22px', textAlign: 'center', boxShadow: '0 2px 8px #f9b23322', marginBottom: 0 }}>
        <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', marginBottom: 10 }}>Share Your Wellness Story</h3>
        <div style={{ color: '#222', fontSize: 16, marginBottom: 16 }}>
          We’d love to hear how The Holistic Table by KB has helped you! Whether it’s a favorite glow bowl, sea moss blend, tea, or pantry item—your story matters.
        </div>
        <a href="#" style={{ background: '#F9B233', color: '#fff', padding: '12px 32px', borderRadius: 22, fontWeight: 600, fontSize: 17, textDecoration: 'none', boxShadow: '0 2px 8px #f9b23333', transition: 'background 0.2s' }}>Click Here to Share Your Experience</a>
      </div>
    </div>
  );
}

// --- Fresh Press Page Component ---
function FreshPress() {
  // Example data for posts
  const featuredPost = {
    title: "Glow Goddess Bowl (Coming Soon)",
    preview: "Quinoa, roasted sweet potatoes (Creole-spiced), crispy chickpeas, steamed kale, avocado, pomegranate seeds, and tahini-lemon dressing.",
  image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80", // Plant-based bowl image
  link: "/menu#glow-goddess-bowl",
    category: "VIP Glow Kitchen"
  };
  const posts = [
    {
      title: "5-Minute Mindfulness Rituals for Busy Mornings",
      preview: "Start your day with clarity and calm using these quick, effective mindfulness practices.",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      link: "#",
      category: "Wellness Tips"
    },
    {
      title: "Rainbow Veggie Wraps: Lunch in Under 10 Minutes",
      preview: "Colorful, crunchy, and packed with nutrients—these wraps are perfect for meal prep or on-the-go lunches.",
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80", // Colorful veggie wraps image
      link: "#",
      category: "Recipes"
    },
    {
      title: "KB’s Favorite Summer Skincare Essentials",
      preview: "Discover the clean, plant-based products I’m loving for glowing, hydrated skin all season long.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      link: "#",
      category: "Product Highlights"
    },
    {
      title: "Glow Goddess Bowl (Coming Soon)",
      preview: "Quinoa, roasted sweet potatoes (Creole-spiced), crispy chickpeas, steamed kale, avocado, pomegranate seeds, and tahini-lemon dressing.",
  image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80", // Plant-based bowl image
      link: "/menu#glow-goddess-bowl",
      category: "VIP Glow Kitchen"
    },
    {
      title: "How to Build a Balanced Plant-Based Plate",
      preview: "A simple guide to creating nourishing, satisfying meals with every food group represented.",
  image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80", // Plant-based plate image
      link: "#",
      category: "Wellness Tips"
    }
  ];
  const categories = [
    { name: "Recipes", icon: "🥗" },
    { name: "Wellness Tips", icon: "🧘‍♀️" },
    { name: "Product Highlights", icon: "✨" }
  ];
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 0' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#4A7C59', fontSize: '2.5rem', marginBottom: 8 }}>Fresh Press</h1>
        <div style={{ color: '#555', fontSize: '1.2rem', marginBottom: 18 }}>
          Your go to source for fresh recipes, wellness tips, and KB’s latest updates.
        </div>
  <a href="#newsletter" style={{ background: '#F9B233', color: '#fff', padding: '12px 28px', borderRadius: 24, fontWeight: 600, fontSize: 18, textDecoration: 'none', boxShadow: '0 2px 8px #f9b23333', transition: 'background 0.2s' }}>Join the Table</a>
      </div>

      {/* Categories */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginBottom: 30 }}>
        {categories.map(cat => (
          <div key={cat.name} style={{ display: 'flex', alignItems: 'center', fontSize: 18, color: '#4A7C59', background: '#F6F6F6', borderRadius: 18, padding: '6px 18px', boxShadow: '0 1px 4px #eee' }}>
            <span style={{ fontSize: 22, marginRight: 8 }}>{cat.icon}</span> {cat.name}
          </div>
        ))}
      </div>

      {/* Featured Post */}
      <div style={{ background: '#FFF8E7', borderRadius: 18, boxShadow: '0 2px 12px #f9b23322', display: 'flex', alignItems: 'center', marginBottom: 38, overflow: 'hidden' }}>
        <img src={featuredPost.image} alt={featuredPost.title} style={{ width: 140, height: 140, objectFit: 'cover', borderRadius: '18px 0 0 18px' }} />
        <div style={{ padding: 20 }}>
          <div style={{ color: '#F9B233', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{featuredPost.category} • Featured</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#4A7C59', marginBottom: 6 }}>{featuredPost.title}</div>
          <div style={{ color: '#555', fontSize: 15, marginBottom: 10 }}>{featuredPost.preview}</div>
          <a href={featuredPost.link} style={{ color: '#F9B233', fontWeight: 600, textDecoration: 'underline', fontSize: 15 }}>Read More</a>
        </div>
      </div>

      {/* Latest Posts */}
      <div style={{ marginBottom: 44 }}>
        <h2 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', marginBottom: 18 }}>Latest Posts</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          {posts.slice(0, 4).map(post => (
            <div key={post.title} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 1px 8px #eee', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: 220 }}>
              <img src={post.image} alt={post.title} style={{ width: '100%', height: 110, objectFit: 'cover' }} />
              <div style={{ padding: '14px 16px 18px 16px', flex: 1 }}>
                <div style={{ color: '#F9B233', fontWeight: 600, fontSize: 14, marginBottom: 2 }}>{post.category}</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: '#4A7C59', marginBottom: 4 }}>{post.title}</div>
                <div style={{ color: '#555', fontSize: 14, marginBottom: 10 }}>{post.preview}</div>
                <a href={post.link} style={{ color: '#F9B233', fontWeight: 600, textDecoration: 'underline', fontSize: 14 }}>Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Sign-Up Block */}
      <div id="newsletter" style={{ background: '#F6F6F6', borderRadius: 18, padding: '32px 24px', textAlign: 'center', boxShadow: '0 1px 8px #eee', maxWidth: 500, margin: '0 auto' }}>
        <div style={{ fontSize: 20, color: '#4A7C59', fontWeight: 700, marginBottom: 10 }}>Get free recipes, discounts, and wellness tips straight to your inbox.</div>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }} onSubmit={e => { e.preventDefault(); alert('Thank you for signing up!'); }}>
          <input type="email" required placeholder="Your email address" style={{ padding: '10px 16px', borderRadius: 8, border: '1px solid #ccc', fontSize: 16, width: 260, marginBottom: 0 }} />
          <button type="submit" style={{ background: '#F9B233', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 600, fontSize: 16, cursor: 'pointer', boxShadow: '0 1px 4px #f9b23333' }}>Sign Me Up</button>
        </form>
      </div>
    </div>
  );
}


// --- FULL PAGE COMPONENTS RESTORED ---

// Shop (The Pantry)
function Shop() {
  return (
    <div style={{ padding: '48px 16px', maxWidth: 900, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 24, textAlign: 'center' }}>The Pantry</h2>
      <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#222', margin: '0 auto 32px auto', maxWidth: 650, textAlign: 'center' }}>
        Discover our curated collection of wellness essentials: sea moss gels, herbal teas, superfood mixes, and more. Each product is crafted with premium, plant based ingredients to support your health, energy, and daily rituals. Shop small batch, vegan, and nutrient rich pantry staples for a vibrant, holistic lifestyle.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
        {/* 1. Vitality Glow Seamoss Gel – Pineapple Ginger + Curcumin */}
        <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center', marginBottom: 24 }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ width: '100%', height: 160, background: '#eee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: 18 }}>
              Image Placeholder
            </div>
          </div>
          <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>Vitality Glow Seamoss Gel – Pineapple Ginger + Curcumin</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>16oz – $24</div>
          <div style={{ fontSize: 15, marginBottom: 10 }}>
            A golden burst of plant-powered vitality. Our Pineapple Ginger + Curcumin Seamoss Gel blends wildcrafted seamoss with tropical pineapple, zesty ginger, and anti-inflammatory curcumin for a vibrant wellness boost. Perfect in smoothies, teas, or straight off the spoon.
          </div>
          <div style={{ fontSize: 14, color: '#4A7C59', marginBottom: 6 }}><b>Benefits:</b> Immune support, anti-inflammatory, digestive health, energy boost.</div>
          <div style={{ fontSize: 13, color: '#888', marginBottom: 10 }}><b>Storage:</b> Refrigerate after opening. Lasts 3–4 weeks chilled or freeze for up to 6 months.</div>
          <a href="https://buy.stripe.com/test_4gM14ngRKaX69G16hhcEw00" target="_blank" rel="noopener noreferrer" style={{ background: '#4A7C59', color: '#fff', padding: '8px 24px', borderRadius: 20, textDecoration: 'none', fontWeight: 700 }}>Buy Now</a>
        </div>
        {/* 2. Radiance Revive Seamoss Gel – Pitaya Infused */}
        <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center', marginBottom: 24 }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ width: '100%', height: 160, background: '#eee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: 18 }}>
              Image Placeholder
            </div>
          </div>
          <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>Radiance Revive Seamoss Gel – Pitaya Infused</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>16oz – $24</div>
          <div style={{ fontSize: 15, marginBottom: 10 }}>
            Bright, beautiful, and bursting with antioxidants—this pitaya (dragon fruit) infused seamoss gel supports skin glow, energy, and immunity with every spoonful. Sweet and subtly tropical, it’s the perfect daily wellness ritual.
          </div>
          <div style={{ fontSize: 14, color: '#4A7C59', marginBottom: 6 }}><b>Benefits:</b> Antioxidant-rich, supports skin health, boosts hydration, aids digestion.</div>
          <div style={{ fontSize: 13, color: '#888', marginBottom: 10 }}><b>Storage:</b> Refrigerate after opening. Lasts 3–4 weeks chilled or freeze for up to 6 months.</div>
          <a href="https://buy.stripe.com/test_bJebJ17ha1mwf0l0WXcEw01" target="_blank" rel="noopener noreferrer" style={{ background: '#4A7C59', color: '#fff', padding: '8px 24px', borderRadius: 20, textDecoration: 'none', fontWeight: 700 }}>Buy Now</a>
        </div>
        {/* 3. Calm & Restore Herbal Tea Blend */}
        <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center', marginBottom: 24 }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ width: '100%', height: 160, background: '#eee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: 18 }}>
              Image Placeholder
            </div>
          </div>
          <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>Calm & Restore Herbal Tea Blend</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>4oz Pouch – $12</div>
          <div style={{ fontSize: 15, marginBottom: 10 }}>
            A soothing blend of chamomile, lemon balm, lavender, and spearmint crafted to quiet the mind, relax the body, and restore balance. Perfect for winding down at the end of the day or centering before meditation.
          </div>
          <div style={{ fontSize: 14, color: '#4A7C59', marginBottom: 6 }}><b>Benefits:</b> Stress relief, improved sleep, digestive support.</div>
          <a href="https://buy.stripe.com/test_cNi4gz8le9T2aK50WXcEw02" target="_blank" rel="noopener noreferrer" style={{ background: '#4A7C59', color: '#fff', padding: '8px 24px', borderRadius: 20, textDecoration: 'none', fontWeight: 700 }}>Buy Now</a>
        </div>
        {/* 4. Tropical Vitality Tea – Soursop, Rooibos & Moringa */}
        <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center', marginBottom: 24 }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ width: '100%', height: 160, background: '#eee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: 18 }}>
              Image Placeholder
            </div>
          </div>
          <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>Tropical Vitality Tea – Soursop, Rooibos & Moringa</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>4oz Pouch – $15</div>
          <div style={{ fontSize: 15, marginBottom: 10 }}>
            An uplifting, island-inspired blend featuring antioxidant-rich soursop leaf, earthy rooibos, and nutrient-packed moringa. Naturally caffeine-free with a light tropical flavor and a gentle energy lift.
          </div>
          <div style={{ fontSize: 14, color: '#4A7C59', marginBottom: 6 }}><b>Benefits:</b> Immune support, antioxidant boost, anti-inflammatory properties.</div>
          <a href="https://buy.stripe.com/test_eVq4gzcBuaX6f0l8ppcEw07" target="_blank" rel="noopener noreferrer" style={{ background: '#4A7C59', color: '#fff', padding: '8px 24px', borderRadius: 20, textDecoration: 'none', fontWeight: 700 }}>Buy Now</a>
        </div>
        {/* 5. Loose Herbs – Moringa Leaf */}
        <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center', marginBottom: 24 }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ width: '100%', height: 160, background: '#eee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: 18 }}>
              Image Placeholder
            </div>
          </div>
          <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>Loose Herbs – Moringa Leaf</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>4oz Bag – $10</div>
          <div style={{ fontSize: 15, marginBottom: 10 }}>
            Known as the “miracle tree,” moringa is rich in vitamins, minerals, and amino acids. Add to teas, smoothies, or soups for a nutritional boost.
          </div>
          <div style={{ fontSize: 14, color: '#4A7C59', marginBottom: 6 }}><b>Benefits:</b> Nutrient-dense superfood, energy support, immune health.</div>
          <a href="https://buy.stripe.com/test_dRm00j6d61mwf0l9ttcEw04" target="_blank" rel="noopener noreferrer" style={{ background: '#4A7C59', color: '#fff', padding: '8px 24px', borderRadius: 20, textDecoration: 'none', fontWeight: 700 }}>Buy Now</a>
        </div>
        {/* 6. Loose Herbs – Burdock Root */}
        <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center', marginBottom: 24 }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ width: '100%', height: 160, background: '#eee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: 18 }}>
              Image Placeholder
            </div>
          </div>
          <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>Loose Herbs – Burdock Root</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>4oz Bag – $14</div>
          <div style={{ fontSize: 15, marginBottom: 10 }}>
            A time-honored herb for detoxification and skin health, burdock root offers earthy depth to teas and tonics.
          </div>
          <div style={{ fontSize: 14, color: '#4A7C59', marginBottom: 6 }}><b>Benefits:</b> Liver support, skin health, anti-inflammatory properties.</div>
          <a href="https://buy.stripe.com/test_7sY3cvfNG9T2aK5dJJcEw05" target="_blank" rel="noopener noreferrer" style={{ background: '#4A7C59', color: '#fff', padding: '8px 24px', borderRadius: 20, textDecoration: 'none', fontWeight: 700 }}>Buy Now</a>
        </div>
        {/* 7. Moringa Pancake & Waffle Mix (Vegan) */}
        <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center', marginBottom: 24 }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ width: '100%', height: 160, background: '#eee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: 18 }}>
              Image Placeholder
            </div>
          </div>
          <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>Moringa Pancake & Waffle Mix (Vegan)</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>16oz Bag – $18</div>
          <div style={{ fontSize: 15, marginBottom: 10 }}>
            Wholesome meets delicious—this vegan pancake and waffle mix blends whole grain flour, coconut sugar, and moringa for a subtly sweet, nutrient-packed breakfast. Just add plant milk and a splash of oil for a quick, fluffy stack.
          </div>
          <div style={{ fontSize: 14, color: '#4A7C59', marginBottom: 6 }}><b>Benefits:</b> Antioxidants, plant-based protein, vitamins & minerals.</div>
          <a href="https://buy.stripe.com/test_6oU3cv7haaX6cSd9ttcEw06" target="_blank" rel="noopener noreferrer" style={{ background: '#4A7C59', color: '#fff', padding: '8px 24px', borderRadius: 20, textDecoration: 'none', fontWeight: 700 }}>Buy Now</a>
        </div>
      </div>
    </div>
  );
}

// Services (The Holistic Hub)
function Services() {
  return (
    <div style={{ padding: '48px 16px', maxWidth: 900, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 18, textAlign: 'center' }}>The Holistic Hub</h2>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 0' }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: '1.18rem', color: '#222', marginBottom: 14, textAlign: 'center' }}>
            Welcome to The Holistic Hub, your digital library for plant based living, holistic wellness, and self care. Download free guides, explore premium ebooks, and discover resources to help you thrive on your wellness journey.
          </div>
          <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', marginBottom: 12, textAlign: 'center' }}>Categories You’ll Find Here</h3>
          <ul style={{ color: '#4A7C59', fontSize: 16, marginBottom: 0, paddingLeft: 22, lineHeight: 1.7, textAlign: 'left', maxWidth: 500, margin: '0 auto' }}>
            <li><b>Cookbooks:</b> Vegan, gluten-free, seasonal eating, and cultural-inspired recipes.</li>
            <li><b>Holistic Guides:</b> Herbal remedies, mindfulness, stress relief, and natural wellness.</li>
            <li><b>Self-Help Books:</b> Goal setting, confidence building, and daily rituals for a balanced life.</li>
          </ul>
        </div>
        <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', marginBottom: 18 }}>📚 Always Free Resource</h3>
        <div style={{ background: '#e8f5e9', borderRadius: 14, padding: 20, marginBottom: 28 }}>
          <b>Resource:</b> "7-Day Plant-Powered Kickstart Guide"<br/>
          <b>Description:</b> A starter guide for anyone looking to embrace plant-based eating with ease. Includes grocery list, 7 days of simple recipes, and wellness tips for a healthier lifestyle.<br/>
          <b>Price:</b> FREE (Instant Download)<br/>
          <b>Format:</b> PDF Download<br/>
          <a href="#" style={{
            display: 'inline-block',
            background: '#4A7C59',
            color: '#fff',
            padding: '10px 28px',
            borderRadius: 20,
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: 16,
            marginTop: 14
          }}>Download</a>
        </div>
        <h3 style={{ color: '#b94a48', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', marginBottom: 18 }}>📖 Premium Ebook (Cookbook & Holistic Blend)</h3>
        <div style={{ background: '#fffbe7', borderRadius: 14, padding: 20, marginBottom: 28 }}>
          <b>Book Title:</b> "Glow from Within: The Holistic Vegan Cookbook"<br/>
          <b>Description:</b> A beautifully curated ebook with 40+ vibrant vegan recipes, holistic lifestyle tips, herbal remedies, and self-care rituals.<br/>
          <b>Price:</b> $18<br/>
          <b>Format:</b> Instant PDF Download with photos, tips, and resource links<br/>
          <a href="#" style={{
            display: 'inline-block',
            background: '#b94a48',
            color: '#fff',
            padding: '10px 28px',
            borderRadius: 20,
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: 16,
            marginTop: 14
          }}>Purchase & Download</a>
        </div>
        <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', marginBottom: 18 }}>🛒 Premium Digital Products</h3>
        <div style={{ background: '#f8f8f8', borderRadius: 14, padding: 20, marginBottom: 18 }}>
          <b>Holistic Self-Care Guide</b><br/>
          <span style={{ color: '#555' }}>Description:</span> A complete wellness roadmap with daily rituals, herbal tea recipes, affirmations, and stress-reducing practices.<br/>
          <span style={{ color: '#555' }}>Price:</span> $12<br/>
          <span style={{ color: '#555' }}>Format:</span> PDF Download<br/>
          <a href="#" style={{
            display: 'inline-block',
            background: '#4A7C59',
            color: '#fff',
            padding: '10px 28px',
            borderRadius: 20,
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: 16,
            marginTop: 14
          }}>Purchase & Download</a>
        </div>
        <div style={{ background: '#f8f8f8', borderRadius: 14, padding: 20, marginBottom: 28 }}>
          <b>Herbal Healing Pantry Guide</b><br/>
          <span style={{ color: '#555' }}>Description:</span> Learn how to stock your kitchen with natural, immunity-boosting herbs, spices, and plant-based essentials.<br/>
          <span style={{ color: '#555' }}>Price:</span> $9<br/>
          <span style={{ color: '#555' }}>Format:</span> PDF Download<br/>
          <a href="#" style={{
            display: 'inline-block',
            background: '#4A7C59',
            color: '#fff',
            padding: '10px 28px',
            borderRadius: 20,
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: 16,
            marginTop: 14
          }}>Purchase & Download</a>
        </div>
        <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', marginBottom: 12 }}>Categories You’ll Find Here</h3>
        <ul style={{ color: '#4A7C59', fontSize: 16, marginBottom: 0, paddingLeft: 22, lineHeight: 1.7 }}>
          <li><b>Cookbooks:</b> Vegan, gluten-free, seasonal eating, and cultural-inspired recipes.</li>
          <li><b>Holistic Guides:</b> Herbal remedies, mindfulness, stress relief, and natural wellness.</li>
          <li><b>Self-Help Books:</b> Goal setting, confidence building, and daily rituals for a balanced life.</li>
        </ul>
      </div>
    </div>
  );
}

// GlowPlans
function GlowPlans() {
  return (
    <div style={{ padding: '48px 16px', maxWidth: 900, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 24, textAlign: 'center' }}>The Glow Plans</h2>
      <div style={{ marginBottom: 32, color: '#222', fontSize: 17, textAlign: 'center' }}>
  Choose from two unique subscriptions: VIP Glow Bowls delivers fresh, nourishing plant-based bowls each week or month, while The Ritual Crate brings you a curated wellness box with teas, herbs, sea moss gel, recipes, and holistic surprises. Enjoy exclusive perks, flexible options, and a vibrant wellness experience delivered to you.
      </div>
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', marginBottom: 40 }}>
        <>
          {/* Glow Crate card - single column layout to match VIP Glow Bowls card */}
          <div style={{
            flex: '1 1 340px',
            minWidth: 300,
            maxWidth: 500,
            background: '#f8f8f8',
            borderRadius: 16,
            padding: 32,
            boxShadow: '0 2px 8px rgba(74,124,89,0.06)',
            marginBottom: 32,
            fontFamily: 'Lora, Georgia, Times New Roman, serif',
            color: '#222',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'stretch'
          }}>
            <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.35rem', marginBottom: 8 }}>✨ The Ritual Crate</h3>
            <div style={{ color: '#222', fontSize: 16, marginBottom: 10, fontWeight: 600 }}>A monthly wellness experience from The Holistic Table</div>
            <div style={{ fontWeight: 600, color: '#4A7C59', marginBottom: 8 }}>What’s Inside Each Crate</div>
            <ul style={{ color: '#4A7C59', fontSize: 15, marginBottom: 10, paddingLeft: 20, marginTop: 0 }}>
              <li>1 Wellness Tea Blend (4 oz)</li>
              <li>1 Loose Herb (4 oz) with usage guide</li>
              <li>1 Sea Moss Gel (16 oz, seasonal flavor)</li>
              <li>1 Recipe Card featuring a nourishing meal or drink</li>
              <li>1 Surprise Holistic Item (examples: mini smudge stick, bath soak, herbal salve, journal prompt set)</li>
              <li>Exclusive Monthly Tip Sheet: herbal remedies, wellness rituals, seasonal self-care tips</li>
            </ul>
            <div style={{ fontWeight: 600, color: '#4A7C59', marginBottom: 8 }}>Subscription Options</div>
            <ul style={{ color: '#4A7C59', fontSize: 15, marginBottom: 10, paddingLeft: 20, marginTop: 0 }}>
              <li><b>Monthly Ritual</b> (Billed Monthly): $45/month<br/>Free pickup in Colorado Springs<br/>$8 flat local delivery (no Denver)</li>
              <li style={{ marginTop: 8 }}><b>Bi-Monthly Ritual</b> (Every 2 Months): $88 every 2 months (save $2)<br/>Same perks as monthly</li>
              <li style={{ marginTop: 8 }}><b>Annual Ritual Membership</b> (Best Value): $480/year (save $60 — equivalent to 1 free crate + extra item in your birthday month)<br/>Early access to new products and seasonal limited runs</li>
            </ul>
            <div style={{ color: '#388e3c', fontWeight: 700, marginBottom: 6 }}>Perks for Subscribers</div>
            <ul style={{ color: '#388e3c', fontSize: 15, marginBottom: 10, paddingLeft: 20, marginTop: 0 }}>
              <li>10% off all other Holistic Table products year-round</li>
              <li>Priority restock access for limited herbs & seasonal Sea Moss</li>
              <li>Invitation to exclusive online “Ritual Sessions” (mini wellness workshops)</li>
            </ul>
            <div style={{ color: '#222', fontWeight: 700, marginBottom: 6 }}>Cancellation & Pause Policy</div>
            <div style={{ color: '#222', fontSize: 15, marginBottom: 8 }}>Cancel or pause up to 7 days before next billing date<br/>Refunds available if canceled within policy timeframe</div>
            <div style={{ color: '#222', fontWeight: 700, marginBottom: 6 }}>Order & Delivery Schedule</div>
            <div style={{ color: '#222', fontSize: 15, marginBottom: 12 }}>Order Deadline: 15th of each month<br/>Crates Ship/Deliver/Pick-up: Last week of the month</div>
            <a
              href="https://buy.stripe.com/test_RitualCrate"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#4A7C59',
                color: '#fff',
                padding: '10px 32px',
                borderRadius: 20,
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1.1rem',
                marginTop: 8,
                width: 'fit-content',
                marginLeft: 'auto',
                marginRight: 'auto',
                cursor: 'pointer',
                boxShadow: '0 2px 8px #4A7C5933',
                transition: 'background 0.2s'
              }}
            >
              Rituals Monthly
            </a>
          </div>
          {/* VIP Glow Bowls card */}
          <div style={{ minWidth: 300, maxWidth: 500, background: '#f8f8f8', borderRadius: 16, padding: 32, boxShadow: '0 2px 8px rgba(74,124,89,0.06)', marginBottom: 32, fontFamily: 'Lora, Georgia, Times New Roman, serif', color: '#222' }}>
            <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.35rem', marginBottom: 8 }}>🌿 VIP Glow Bowls</h3>
            <div style={{ color: '#222', fontSize: 16, marginBottom: 10, fontWeight: 600 }}>Weekly Subscription (billed every week)</div>
            <ul style={{ color: '#4A7C59', fontSize: 15, marginBottom: 10, paddingLeft: 20, marginTop: 0 }}>
              <li>3 Bowls/week – $30 ($10 each)</li>
              <li>5 Bowls/week – $48 ($9.60 each)</li>
            </ul>
            <div style={{ color: '#222', fontSize: 16, marginBottom: 10, fontWeight: 600 }}>Bi-Weekly Subscription (billed every 2 weeks)</div>
            <ul style={{ color: '#4A7C59', fontSize: 15, marginBottom: 10, paddingLeft: 20, marginTop: 0 }}>
              <li>6 Bowls every 2 weeks – $58 ($9.67 each)</li>
              <li>10 Bowls every 2 weeks – $92 ($9.20 each)</li>
            </ul>
            <div style={{ color: '#222', fontSize: 16, marginBottom: 10, fontWeight: 600 }}>Monthly Subscription (billed every month)</div>
            <ul style={{ color: '#4A7C59', fontSize: 15, marginBottom: 10, paddingLeft: 20, marginTop: 0 }}>
              <li>12 Bowls/month – $110 ($9.17 each)</li>
              <li>20 Bowls/month – $180 ($9 each)</li>
            </ul>
            <div style={{ color: '#388e3c', fontWeight: 700, marginBottom: 6 }}>Perks for All Subscribers:</div>
            <ul style={{ color: '#388e3c', fontSize: 15, marginBottom: 10, paddingLeft: 20, marginTop: 0 }}>
              <li>Access to VIP + Coming Soon bowls</li>
              <li>Free sample of a tea blend or loose herb each month</li>
              <li>Surprise holistic item each month</li>
            </ul>
            <div style={{ color: '#222', fontWeight: 700, marginBottom: 6 }}>Ordering & Delivery:</div>
            <div style={{ color: '#222', fontSize: 15, marginBottom: 8 }}><b>Order Deadline:</b> Thursdays by 5 PM</div>
            <div style={{ color: '#222', fontSize: 15, marginBottom: 8 }}><b>Pickup:</b> Free in Colorado Springs</div>
            <div style={{ color: '#222', fontSize: 15, marginBottom: 8 }}><b>Delivery:</b> $8 local flat rate (no Denver)</div>
            <div style={{ color: '#222', fontSize: 15, marginBottom: 8 }}>Delivery day is Saturday and you will be texted with pickup or delivery time.</div>
            <div style={{ fontSize: 15, marginBottom: 8 }}><b>Pause/Cancel:</b> <span style={{ color: 'red' }}>A week's notice before next delivery</span></div>
            <div style={{ color: '#4A7C59', fontWeight: 700, fontSize: 16, marginTop: 18, textAlign: 'center' }}>Coming Soon.</div>
            <div style={{ textAlign: 'center', marginTop: 18 }}>
              <button
                style={{
                  background: '#F9B233',
                  color: '#fff',
                  padding: '12px 32px',
                  borderRadius: 22,
                  fontWeight: 600,
                  fontSize: 17,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px #f9b23333',
                  transition: 'background 0.2s',
                  marginTop: 8
                }}
                onClick={() => window.open('https://forms.gle/dWXprWcdn21m59bk7', '_blank')}
                onMouseOver={e => e.currentTarget.style.background = '#e6a821'}
                onMouseOut={e => e.currentTarget.style.background = '#F9B233'}
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

// Testimonials (Wellness Wins)
function Testimonials() {
  return (
    <div style={{ padding: 40, maxWidth: 800, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 10, textAlign: 'center' }}>Wellness Wins</h2>
      {/* ...testimonials content as before... */}
    </div>
  );
}

// FAQs
function FAQs() {
  return (
    <div style={{ padding: 40, maxWidth: 700, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 18, textAlign: 'center' }}>Frequently Asked Questions</h2>
      <div style={{ fontSize: 16, color: '#222', marginBottom: 28, textAlign: 'center' }}>
        Find answers to our most common questions about The Holistic Table by KB, our products, and wellness resources.
      </div>
      <div style={{ fontSize: 16, color: '#222' }}>
        <ol style={{ paddingLeft: 20 }}>
          <li style={{ marginBottom: 18 }}>
            <b>What is The Holistic Table by KB?</b><br />
            The Holistic Table by KB is your space for plant-powered wellness, offering nourishing recipes, superfood blends, holistic self-care tools, workshops, and resources for living vibrantly.
          </li>
          <li style={{ marginBottom: 18 }}>
            <b>Are all your products natural and vegan?</b><br />
            Yes. Every product at The Holistic Table by KB is plant-based, cruelty-free, and made with high-quality, natural ingredients.
          </li>
          <li style={{ marginBottom: 18 }}>
            <b>Do you ship products?</b><br />
            Yes, we ship select items nationwide. Shipping is calculated at checkout based on your location and order size.
          </li>
          <li style={{ marginBottom: 18 }}>
            <b>How should I store Sea Moss gel and herbal blends?</b><br />
            <b>Sea Moss Gel:</b> Keep refrigerated upon arrival. Lasts 3 to 4 weeks in the fridge or up to 6 months frozen.<br />
            <b>Herbal Blends:</b> Store in a cool, dry place away from direct sunlight.
          </li>
          <li style={{ marginBottom: 18 }}>
            <b>Will there be workshops or events?</b><br />
            Yes. Our workshops and events may be in-person or online depending on the event. You’ll find the details on our Wellness Room page.
          </li>
          <li style={{ marginBottom: 18 }}>
            <b>Do you offer consultations?</b><br />
            Yes, we provide personalized wellness consultations to help you choose the best products, practices, and nutrition for your needs.
          </li>
          <li style={{ marginBottom: 18 }}>
            <b>Can I subscribe for regular deliveries?</b><br />
            Absolutely. We offer subscription plans for our wellness products so you never miss a dose of your favorites.
          </li>
          <li style={{ marginBottom: 0 }}>
            <b>Do you have free resources?</b><br />
            Yes. The Holistic Hub features a rotating free resource, plus premium guides, cookbooks, and self care eBooks.
          </li>
        </ol>
      </div>
      <div style={{ textAlign: 'center', marginTop: 36 }}>
        <a href="/contact" style={{
          display: 'inline-block',
          background: '#F9B233',
          color: '#fff',
          padding: '12px 32px',
          borderRadius: 22,
          fontWeight: 600,
          fontSize: 17,
          textDecoration: 'none',
          boxShadow: '0 2px 8px #f9b23333',
          transition: 'background 0.2s'
        }}>Still Have Questions?</a>
      </div>
    </div>
  );
}

// Contact
function Contact() {
  return (
    <div style={{ padding: 40, maxWidth: 700, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 18, textAlign: 'center' }}>Connect With Us</h2>
      <div style={{ fontSize: 16, color: '#222', marginBottom: 28, textAlign: 'center' }}>
        We’d love to hear from you! Whether you have questions about our products, feedback on your experience, or just want to say hello, reach out anytime.
      </div>
      <div style={{ fontSize: 16, color: '#222', marginBottom: 24 }}>
        <b>Phone</b><br />
  <span role="img" aria-label="Phone">📞</span> 720-314-8117
      </div>
      <div style={{ fontSize: 16, color: '#222', marginBottom: 24 }}>
        <b>Email</b><br />
  <span role="img" aria-label="Email">📩</span> kwalker@holistictable.com
      </div>
      <div style={{ fontSize: 16, color: '#222', marginBottom: 24 }}>
        <b>Follow Us Online</b><br />
        Stay connected for recipes, wellness tips, exclusive discounts, and product launches:<br />
        <div style={{ marginTop: 8 }}>
          <span style={{ display: 'block', marginBottom: 4 }}><b>Instagram:</b> @theholistictablebykb</span>
          <span style={{ display: 'block', marginBottom: 4 }}><b>Facebook:</b> @theholistictablebykb</span>
          <span style={{ display: 'block', marginBottom: 4 }}><b>Pinterest:</b> @theholistictablebykb</span>
          <span style={{ display: 'block', marginBottom: 4 }}><b>TikTok:</b> @theholistictablebykb</span>
        </div>
      </div>
      <div style={{ fontSize: 16, color: '#222', marginBottom: 0 }}>
        <b>Business Hours</b><br />
        We aim to respond to all inquiries within 24–48 hours (Monday–Friday).
      </div>
    </div>
  );
}

// Checkout
function Checkout() {
  return (
    <div style={{ padding: 40, maxWidth: 700, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 18, textAlign: 'center' }}>Checkout & Booking</h2>
      {/* ...checkout content as before... */}
    </div>
  );
}


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
          <NavLink to="/glow-plans" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>The Glow Plans</NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>The Pantry</NavLink>
          {/* <NavLink to="/subscriptions" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Subscriptions</NavLink> */}
          <NavLink to="/services" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>The Holistic Hub</NavLink>
          <NavLink to="/wellness-room" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>The Wellness Room</NavLink>
          <NavLink to="/fresh-press" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Fresh Press</NavLink>
          {/* <NavLink to="/glow-plans" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>The Glow Plans</NavLink> */}
          <NavLink to="/testimonials" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Wellness Wins</NavLink>
          <NavLink to="/faqs" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>FAQs</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Let's Connect</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/shop" element={<Shop />} />
          {/* <Route path="/subscriptions" element={<Subscriptions />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/fresh-press" element={<FreshPress />} />
          <Route path="/wellness-room" element={<WellnessRoom />} />
          <Route path="/glow-plans" element={<GlowPlans />} />
          <Route path="/testimonials" element={<WellnessWins />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

// Home
function Home() {
  return (
    <div>
      <section style={{ textAlign: 'center', padding: '48px 0 32px 0', background: '#f5f5f5' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h1 className="brand-title" style={{ fontSize: '2.8rem', marginBottom: 16 }}>Where Elevated Indulgence Meets Everyday Wellness.</h1>
          <p className="brand-tagline" style={{ fontSize: '1.3rem', marginBottom: 32 }}>
            Rooted in herbal wellness and mindful living, inspiring your journey to vibrant health.
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
            fontWeight: 700
          }}>Shop The Pantry</NavLink>
        </div>
      </section>
      {/* Featured Items Section */}
      <div style={{ maxWidth: 800, margin: '40px auto', padding: '0 16px' }}>
  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color: '#4A7C59', marginBottom: 24, textAlign: 'center', letterSpacing: '1.2px' }}>Featured Items</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
          {/* Vitality Glow Seamoss Gel – Pineapple Ginger + Curcumin */}
          <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center', marginBottom: 24 }}>
            <div style={{ marginBottom: 18 }}>
              <div style={{ width: '100%', height: 160, background: '#eee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: 18 }}>
                Image Placeholder
              </div>
            </div>
            <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>Vitality Glow Seamoss Gel – Pineapple Ginger + Curcumin</h3>
            <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>16oz – $24</div>
            <div style={{ fontSize: 15, marginBottom: 10 }}>
              A golden burst of plant-powered vitality. Our Pineapple Ginger + Curcumin Seamoss Gel blends wildcrafted seamoss with tropical pineapple, zesty ginger, and anti-inflammatory curcumin for a vibrant wellness boost. Perfect in smoothies, teas, or straight off the spoon.
            </div>
            <div style={{ fontSize: 14, color: '#4A7C59', marginBottom: 6 }}><b>Benefits:</b> Immune support, anti-inflammatory, digestive health, energy boost.</div>
            <div style={{ fontSize: 13, color: '#888', marginBottom: 10 }}><b>Storage:</b> Refrigerate after opening. Lasts 3–4 weeks chilled or freeze for up to 6 months.</div>
            <a href="https://buy.stripe.com/test_4gM14ngRKaX69G16hhcEw00" target="_blank" rel="noopener noreferrer" style={{
              background: '#4A7C59',
              color: '#fff',
              padding: '8px 24px',
              borderRadius: 20,
              textDecoration: 'none',
              fontWeight: 700,
              display: 'block',
              width: 'fit-content',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>Buy Now</a>
          </div>
          {/* Tropical Vitality Tea – Soursop, Rooibos & Moringa */}
          <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center', marginBottom: 24 }}>
            <div style={{ marginBottom: 18 }}>
              <div style={{ width: '100%', height: 160, background: '#eee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: 18 }}>
                Image Placeholder
              </div>
            </div>
            <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>Tropical Vitality Tea – Soursop, Rooibos & Moringa</h3>
            <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>4oz Pouch – $12</div>
            <div style={{ fontSize: 15, marginBottom: 10 }}>
              An uplifting, island-inspired blend featuring antioxidant-rich soursop leaf, earthy rooibos, and nutrient-packed moringa. Naturally caffeine-free with a light tropical flavor and a gentle energy lift.
            </div>
            <div style={{ fontSize: 14, color: '#4A7C59', marginBottom: 6 }}><b>Benefits:</b> Immune support, antioxidant boost, anti-inflammatory properties.</div>
            <a href="https://buy.stripe.com/test_cNi4gz8le9T2aK50WXcEw02" target="_blank" rel="noopener noreferrer" style={{
              background: '#4A7C59',
              color: '#fff',
              padding: '8px 24px',
              borderRadius: 20,
              textDecoration: 'none',
              fontWeight: 700,
              display: 'block',
              width: 'fit-content',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// About
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
      <h2 style={{ 
        fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', 
        fontSize: '2.2rem', 
        color: '#4A7C59', 
        marginBottom: 24, 
        textAlign: 'center',
        letterSpacing: '1.2px',
        fontWeight: 700
      }}>
        Welcome to Your Holistic Wellness Sanctuary
      </h2>
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
        <h3 
          style={{ 
            fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', 
            fontSize: '2rem', 
            color: '#4A7C59', 
            marginBottom: 16, 
            textAlign: 'center', 
            letterSpacing: '1.5px', 
            textShadow: '0 2px 12px rgba(74,124,89,0.10)',
            background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
            padding: '8px 0'
          }}
        >
          Learn More
        </h3>
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
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <a 
            href="https://voyagedenver.com/interview/meet-keisha-bradley-of-kbs-vegan-kitchen/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              display: 'inline-block',
              background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
              color: '#fff',
              padding: '18px 48px',
              borderRadius: 32,
              fontSize: 24,
              fontWeight: 800,
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(74,124,89,0.13)',
              letterSpacing: '1.2px',
              transition: 'transform 0.15s',
              textAlign: 'center',
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Read more
          </a>
        </div>
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
          <li style={{ marginTop: 12 }}><b>Today – A New Chapter</b><br />With a renewed vision and a deep commitment to helping others live healthier, more balanced lives, we’ve relaunched and refreshed our brand. Our hope is to nourish your body, inspire your mind, and support your journey to wellness, wherever you are.</li>
        </ul>
      </div>
    </div>
  );
}

// Menu
function Menu() {
  return (
    <div style={{ position: 'relative', padding: '48px 16px', maxWidth: 900, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      {/* Blurred overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(7px)',
        WebkitBackdropFilter: 'blur(7px)',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
      }}>
        <div style={{
          background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
          color: '#fff',
          padding: '32px 48px',
          borderRadius: 32,
          fontSize: 32,
          fontWeight: 900,
          boxShadow: '0 4px 24px rgba(74,124,89,0.13)',
          letterSpacing: '1.2px',
          textAlign: 'center',
          marginBottom: 18,
        }}>
          VIP Glow Kitchen Launching Soon!
        </div>
        <div style={{ color: '#4A7C59', fontSize: 20, fontWeight: 600, textAlign: 'center', maxWidth: 500, marginBottom: 28 }}>
          We’re putting the finishing touches on our exclusive bowl collection for VIP members. Check back soon for nourishing, chef-crafted meals that glow from the inside out!
        </div>
        <button
          style={{
            background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
            color: '#fff',
            padding: '16px 44px',
            border: 'none',
            borderRadius: 28,
            fontSize: 22,
            fontWeight: 700,
            boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
            cursor: 'pointer',
            marginTop: 8,
            transition: 'transform 0.15s',
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          onClick={() => window.open('https://forms.gle/dWXprWcdn21m59bk7', '_blank')}
        >
          Join Waitlist
        </button>
      </div>
      {/* Blurred content below overlay */}
      <div style={{ filter: 'blur(5px)', pointerEvents: 'none', userSelect: 'none' }}>
        <MenuContent />
      </div>
    </div>
  );
}

// MenuContent
function MenuContent() {
  return (
    <div>
      <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 24 }}>🌿 The Glow Bowl Collection <span style={{ fontSize: '1.1rem', color: '#888' }}>(Exclusive to The Holistic Table by KB VIP Club)</span></h2>
      {/* Glow Bowls */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
        {/* Glow Goddess Bowl */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
          <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', marginBottom: 6 }}>Glow Goddess Bowl</h3>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 8 }}>
            Quinoa, roasted sweet potatoes (Creole-spiced), crispy chickpeas, steamed kale, avocado, pomegranate seeds, and tahini-lemon dressing.
          </div>
          <div style={{ fontStyle: 'italic', color: '#4A7C59', fontSize: 14, marginBottom: 10 }}>Vibe: Bold Southern comfort with smoky paprika and garlic warmth.</div>
          <ul style={{ color: '#4A7C59', fontSize: 14, marginBottom: 10, paddingLeft: 18, marginTop: 0 }}>
            <li>Protein & Fiber from quinoa, chickpeas, and kale</li>
            <li>Rich in Antioxidants from pomegranate, kale, and sweet potatoes</li>
            <li>Healthy Fats from avocado and tahini</li>
            <li>Gluten-Free & Vegan</li>
            <li>Creole seasoning adds warmth and depth</li>
          </ul>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            (Image Placeholder: Bright, colorful bowl with greens, sweet potatoes, and avocado slices)
          </div>
        </div>
        {/* Herbal Harvest Bowl */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
          <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', marginBottom: 6 }}>Herbal Harvest Bowl</h3>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 8 }}>
            Brown rice, grilled zucchini, roasted carrots, marinated lentils, microgreens, hemp seeds, and rosemary-garlic vinaigrette.
          </div>
          <div style={{ fontStyle: 'italic', color: '#4A7C59', fontSize: 14, marginBottom: 10 }}>Vibe: Fresh Mediterranean flavors with herby brightness.</div>
          <ul style={{ color: '#4A7C59', fontSize: 14, marginBottom: 10, paddingLeft: 18, marginTop: 0 }}>
            <li>Plant protein from lentils and hemp seeds</li>
            <li>Mediterranean Diet Inspired</li>
            <li>Anti-Inflammatory herbs rosemary and oregano</li>
            <li>Healthy fats from hemp seeds and olive oil</li>
          </ul>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            (Image Placeholder: Rustic-style bowl with roasted vegetables and lentils)
          </div>
        </div>
        {/* Immunity Boost Bowl */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
          <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', marginBottom: 6 }}>Immunity Boost Bowl</h3>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 8 }}>
            Wild rice, sautéed broccoli, ginger-garlic mushrooms, roasted beets, pumpkin seeds, and turmeric-citrus dressing.
          </div>
          <div style={{ fontStyle: 'italic', color: '#4A7C59', fontSize: 14, marginBottom: 10 }}>Vibe: Golden, anti-inflammatory power bowl for immune support.</div>
          <ul style={{ color: '#4A7C59', fontSize: 14, marginBottom: 10, paddingLeft: 18, marginTop: 0 }}>
            <li>Immunity Support from citrus, turmeric, and beets</li>
            <li>Anti-Inflammatory from turmeric, ginger, and garlic</li>
            <li>Mineral Rich from pumpkin seeds</li>
            <li>Gut-Friendly fiber from rice, broccoli, and mushrooms</li>
            <li>Bright, energizing flavors</li>
          </ul>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            (Image Placeholder: Vibrant yellow dressing over hearty grains and veggies)
          </div>
        </div>
      </div>
      {/* Coming Soon */}
      <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', marginBottom: 8 }}>✨ Coming Soon to the Collection</h3>
      <div style={{ marginBottom: 18, fontWeight: 700, color: '#4A7C59', fontSize: '1.05rem', textAlign: 'center', letterSpacing: '1px' }}>(Seasonal and limited drops)</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
        {/* Island Sunshine Bowl */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
          <h4 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', marginBottom: 6 }}>Island Sunshine Bowl</h4>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 8 }}>
            Coconut rice, jerk-seasoned jackfruit, charred pineapple, black beans, shredded cabbage slaw, mango salsa, and lime-cilantro crema.
          </div>
          <ul style={{ color: '#4A7C59', fontSize: 14, marginBottom: 10, paddingLeft: 18, marginTop: 0 }}>
            <li>Tropical antioxidants from pineapple and mango</li>
            <li>Plant Protein from jackfruit and black beans</li>
            <li>Healthy Fats from lime-cilantro crema</li>
            <li>Fiber-rich coconut rice base</li>
            <li>Immune-boosting vitamin C</li>
          </ul>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            (Image Placeholder: Island-inspired bowl with jackfruit, pineapple, and vibrant slaw)
          </div>
        </div>
        {/* Green Goddess Detox Bowl */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
          <h4 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', marginBottom: 6 }}>Green Goddess Detox Bowl</h4>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 8 }}>
            Kale, cucumber, avocado, quinoa, spirulina-lime dressing, edamame, and hemp seeds.
          </div>
          <ul style={{ color: '#4A7C59', fontSize: 14, marginBottom: 10, paddingLeft: 18, marginTop: 0 }}>
            <li>Detoxifying greens and spirulina</li>
            <li>Protein from edamame and quinoa</li>
            <li>Healthy fats from avocado</li>
            <li>Rich in chlorophyll for cell health</li>
            <li>Anti-inflammatory dressing</li>
          </ul>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            (Image Placeholder: Green detox bowl with kale, avocado, and cucumber)
          </div>
        </div>
        {/* Creole Soul Bowl */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
          <h4 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', marginBottom: 6 }}>Creole Soul Bowl</h4>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 8 }}>
            Cajun-spiced red beans, dirty rice, roasted okra, garlicky greens, and smoked paprika aioli.
          </div>
          <ul style={{ color: '#4A7C59', fontSize: 14, marginBottom: 10, paddingLeft: 18, marginTop: 0 }}>
            <li>Protein from red beans</li>
            <li>Bold Cajun spices for flavor</li>
            <li>Fiber-rich dirty rice base</li>
            <li>Antioxidants from roasted okra</li>
            <li>Vegan comfort food classic</li>
          </ul>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            (Image Placeholder: Soulful Creole bowl with red beans, rice, and okra)
          </div>
        </div>
        {/* Autumn Harvest Glow Bowl (seasonal) */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
          <h4 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', marginBottom: 6 }}>Autumn Harvest Glow Bowl (seasonal)</h4>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 8 }}>
            Farro, maple-roasted butternut squash, Brussels sprouts, cranberry chutney, pumpkin seeds, and sage tahini dressing.
          </div>
          <ul style={{ color: '#4A7C59', fontSize: 14, marginBottom: 10, paddingLeft: 18, marginTop: 0 }}>
            <li>Seasonal squash and Brussels sprouts rich in vitamins</li>
            <li>Antioxidants from cranberries</li>
            <li>Healthy fats from pumpkin seeds</li>
            <li>Comforting fall flavors</li>
            <li>Balanced carbs, protein, and fat</li>
          </ul>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            (Image Placeholder: Autumn bowl with squash, Brussels sprouts, and cranberries)
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
        <li style={{ background: '#fffbe6', border: '1px solid #ffe58f', borderRadius: 10, padding: '12px 18px', marginBottom: 10, color: '#8a6d3b', fontSize: 15, listStyle: 'none' }}>
          <b>Note:</b> VIP Glow Kitchen has limited spots available. If we reach capacity, a waitlist will automatically activate at checkout and you’ll be notified. Thank you for your understanding!
        </li>
        <li>All bowls are 100% vegan & dairy-free</li>
        <li>Gluten-free upon request</li>
        <li>Prepared fresh with premium, small-batch ingredients</li>
      </ul>
    </div>
  );
}

function WellnessRoom() {
  return (
    <div style={{ padding: 40, maxWidth: 700, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 18, textAlign: 'center' }}>The Wellness Room</h2>
      <div style={{ marginBottom: 32, textAlign: 'center' }}>
        <p style={{ fontSize: '1.15rem', color: '#222', marginBottom: 0 }}>
          Your space for holistic support, guidance, and transformation. Book a 1-on-1 session, join a workshop, or sign up for upcoming classes and events!
        </p>
      </div>
      {/* 1-on-1 Consultations */}
      <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', padding: 28, marginBottom: 32 }}>
        <div style={{ fontSize: 28, marginBottom: 8 }}>🌿 1-on-1 Wellness & Nutrition Consultations</div>
        <div style={{ fontSize: 16, color: '#222', marginBottom: 10 }}>
          Personalized sessions to help you reach your health, nutrition, and lifestyle goals. Whether you’re looking to improve your diet, boost your energy, or create a holistic routine, we’ll craft a plan tailored just for you.
        </div>
        <div style={{ color: '#4A7C59', fontSize: 15, marginBottom: 6 }}>Format: Phone or video call</div>
        <ul style={{ fontSize: 15, color: '#222', marginBottom: 10, paddingLeft: 22 }}>
          <li>Personalized nutrition & wellness plans</li>
          <li>Herbal and lifestyle recommendations</li>
          <li>Support for plant-based eating, energy, digestion, and more</li>
        </ul>
        <a href="#" style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
          color: '#fff',
          padding: '12px 32px',
          borderRadius: 24,
          fontSize: 17,
          fontWeight: 700,
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
          marginTop: 8
        }}>Book a Consultation</a>
      </div>
      {/* Workshops */}
      <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', padding: 28, marginBottom: 32 }}>
        <div style={{ fontSize: 24, marginBottom: 8 }}>📅 Workshops <span style={{ color: '#b94a48', fontSize: 15 }}>Coming Soon</span></div>
        <div style={{ fontSize: 16, color: '#222', marginBottom: 10 }}>
          Hands on and interactive sessions where you’ll learn practical skills to enhance your health and wellness. Events will be in person or online depending on the type of workshop.
        </div>
      </div>

      {/* Classes & Special Events */}
      <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', padding: 28, marginBottom: 0 }}>
        <div style={{ fontSize: 24, marginBottom: 8 }}>🎓 Classes & Special Events <span style={{ color: '#b94a48', fontSize: 15 }}>Coming Soon</span></div>
        <div style={{ fontSize: 16, color: '#222', marginBottom: 10 }}>
          Inspiring classes and community events to expand your knowledge, try new wellness practices, and connect with like minded people. Events may be held online or in person depending on the topic and format.
        </div>
        <div style={{ color: '#4A7C59', fontSize: 15, marginBottom: 10 }}>Join the newsletter for upcoming announcements.</div>
        <a href="#newsletter" style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
          color: '#fff',
          padding: '12px 32px',
          borderRadius: 24,
          fontSize: 17,
          fontWeight: 700,
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
          marginTop: 8
  }}>Join the Table</a>
      </div>
    </div>
  );
}

// Identical Ritual Crate Card component
function renderRitualCrateCard() {
  return (
    <div style={{
      background: '#f8f8f8',
      borderRadius: '16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '32px',
      marginBottom: '32px',
      maxWidth: '500px',
      width: '100%',
      fontFamily: 'Lora, Georgia, Times New Roman, serif',
      color: '#222',
    }}>
      <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.7rem', marginBottom: 10, fontWeight: 500 }}>✨ The Ritual Crate</h3>
      <div style={{ fontSize: '1.1rem', marginBottom: 18 }}>
        A monthly wellness experience from The Holistic Table
      </div>
      <div style={{ fontWeight: 600, color: '#4A7C59', marginBottom: 8, fontSize: '1.1rem' }}>What’s Inside Each Crate</div>
      <ul style={{ color: '#4A7C59', fontSize: 15, marginBottom: 16, paddingLeft: 22, lineHeight: 1.7 }}>
  <li>1 Wellness Tea Blend (4 oz)</li>
        <li>1 Loose Herb (4 oz) with usage guide</li>
  <li>1 Sea Moss Gel (16 oz, seasonal flavor)</li>
        <li>1 Recipe Card featuring a nourishing meal or drink</li>
        <li>1 Surprise Holistic Item (examples: mini smudge stick, bath soak, herbal salve, journal prompt set)</li>
        <li>Exclusive Monthly Tip Sheet — herbal remedies, wellness rituals, seasonal self-care tips</li>
      </ul>
      <div style={{ fontWeight: 600, color: '#4A7C59', marginBottom: 8, fontSize: '1.1rem' }}>Subscription Options</div>
      <ul style={{ color: '#4A7C59', fontSize: 15, marginBottom: 16, paddingLeft: 22, lineHeight: 1.7 }}>
        <li><b>Monthly Ritual</b> (Billed Monthly): $45/month<br/>Free pickup in Colorado Springs<br/>$8 flat local delivery (no Denver)</li>
        <li style={{ marginTop: 8 }}><b>Bi-Monthly Ritual</b> (Every 2 Months): $88 every 2 months (save $2)<br/>Same perks as monthly</li>
        <li style={{ marginTop: 8 }}><b>Annual Ritual Membership</b> (Best Value): $480/year (save $60 — equivalent to 1 free crate + extra item in your birthday month)<br/>Early access to new products and seasonal limited runs</li>
      </ul>
      <div style={{ fontWeight: 600, color: '#4A7C59', marginBottom: 8, fontSize: '1.1rem' }}>Perks for Subscribers</div>
      <ul style={{ color: '#4A7C59', fontSize: 15, marginBottom: 16, paddingLeft: 22, lineHeight: 1.7 }}>
        <li>10% off all other Holistic Table products year-round</li>
        <li>Priority restock access for limited herbs & seasonal Sea Moss</li>
        <li>Invitation to exclusive online “Ritual Sessions” (mini wellness workshops)</li>
      </ul>
      <div style={{ fontWeight: 600, color: '#4A7C59', marginBottom: 8, fontSize: '1.1rem' }}>Cancellation & Pause Policy</div>
      <div style={{ marginBottom: 16, color: '#222', fontSize: 15 }}>Cancel or pause up to 7 days before next billing date<br/>Refunds available if canceled within policy timeframe</div>
      <div style={{ fontWeight: 600, color: '#4A7C59', marginBottom: 8, fontSize: '1.1rem' }}>Order & Delivery Schedule</div>
  <div style={{ color: '#222', fontSize: 15, marginBottom: 16 }}>Order Deadline: 15th of each month<br/>Crates Ship/Deliver/Pick-up: Last week of the month<br/>This crate is shipped with normal rates.</div>
            <a href="https://buy.stripe.com/fZu7sL2ZH4hpbM11Fu8IU01" target="_blank" rel="noopener noreferrer" style={{
    display: 'inline-block',
    background: '#4A7C59',
    color: '#fff',
    padding: '10px 32px',
    borderRadius: 20,
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: '1.1rem',
    marginTop: 8
  }}>Order Now</a>
    </div>
  );
}

export default App;
