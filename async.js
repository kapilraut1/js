function loginUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("✅ User logged in"), 1000);
  });
}

function getUserProfile() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("👤 User profile loaded"), 1000);
  });
}

async function showDashboard() {
  const loginMessage = await loginUser();
  console.log(loginMessage);

  const profileMessage = await getUserProfile();
  console.log(profileMessage);

  console.log("📊 Dashboard shown");
}

showDashboard();
