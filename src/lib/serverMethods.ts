import Env from "@/config/env";
import { headers as getHeaders } from "next/headers";
import { wait } from "./utils";


function safeHeaders(): HeadersInit | undefined {
  try {
    return getHeaders();
  } catch {
    return undefined;
  }
}

export async function fetchPosts(page: number) {
  const res = await fetch(`${Env.APP_URL}/api/post?page=${page}`, {
    cache: "no-cache",
    headers: safeHeaders(),
  });
  if (!res.ok) {
    throw new Error("Failed to fecth posts");
  }
  const response = await res.json();

  return response!.data;
}

export async function fetchUsers() {
  const res = await fetch(`${Env.APP_URL}/api/user`, {
    headers: safeHeaders(),
    next: {
      revalidate: 3600,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fecth posts");
  }
  const response = await res.json();
  return response?.data;
}

export async function fetchUserPosts() {
  const res = await fetch(`${Env.APP_URL}/api/user/post`, {
    headers: safeHeaders(),
    cache: "no-cache",
    next: {
      revalidate: 3600,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fecth posts");
  }
  const response = await res.json();
  return response!.data;
}

export async function fetchUserComments() {
  const res = await fetch(`${Env.APP_URL}/api/user/comment`, {
    headers: safeHeaders(),
    cache: "default",
    next: {
      revalidate: 3600,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fecth posts");
  }
  const response = await res.json();
  return response!.data;
}

export async function fetchPost(id: number) {
  const res = await fetch(`${Env.APP_URL}/api/post/${id}`, {
    cache: "no-cache",
    headers: safeHeaders(),
  });
  if (!res.ok) {
    throw new Error("Failed to fecth posts");
  }
  const response = await res.json();
  return response?.data;
}

export async function fetchNotifications() {
  const res = await fetch(`${Env.APP_URL}/api/notifications`, {
    headers: safeHeaders(),
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fecth posts");
  }
  const response = await res.json();
  return response?.data;
}

export async function fetchUser(id: number) {
  const res = await fetch(`${Env.APP_URL}/api/user/${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fecth posts");
  }
  const response = await res.json();
  return response?.data;
}

export async function searchUser(query: string) {
  const res = await fetch(`${Env.APP_URL}/api/explore?query=${query}`, {
    cache: "no-cache",
    headers: safeHeaders(),
  });
  if (!res.ok) {
    throw new Error("Failed to fecth posts");
  }

  const response = await res.json();
  return response?.data;
}

