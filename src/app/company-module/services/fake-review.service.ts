import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Review } from '../company-module/interfaces/review.interface';

@Injectable({
  providedIn: 'root'
})
export class FakeReviewService {

  private localStorageKey = 'reviews';

  constructor() { }

  // Obtener todas las reseñas
  getAllReviews(): Observable<Review[]> {
    const reviews = this.getReviewsFromLocalStorage();
    return of(reviews);
  }

  // Obtener una reseña por su ID de revisor
  getReviewById(reviewerId: string): Observable<Review | undefined> {
    const reviews = this.getReviewsFromLocalStorage();
    const review = reviews.find(r => r.reviewerId === reviewerId);
    return of(review);
  }

  // Crear una nueva reseña
  createReview(review: Review): Observable<Review> {
    const reviews = this.getReviewsFromLocalStorage();
    reviews.push(review);
    this.setReviewsToLocalStorage(reviews);
    return of(review);
  }

  // Actualizar una reseña existente
  updateReview(reviewerId: string, updatedReview: Review): Observable<Review | undefined> {
    let reviews = this.getReviewsFromLocalStorage();
    const index = reviews.findIndex(r => r.reviewerId === reviewerId);
    
    if (index !== -1) {
      reviews[index] = updatedReview;
      this.setReviewsToLocalStorage(reviews);
      return of(updatedReview);
    }

    return of(undefined);
  }

  // Eliminar una reseña
  deleteReview(reviewerId: string): Observable<void> {
    let reviews = this.getReviewsFromLocalStorage();
    reviews = reviews.filter(r => r.reviewerId !== reviewerId);
    this.setReviewsToLocalStorage(reviews);
    return of();
  }

  // Métodos auxiliares para manejar LocalStorage

  private getReviewsFromLocalStorage(): Review[] {
    const reviewsJson = localStorage.getItem(this.localStorageKey);
    return reviewsJson ? JSON.parse(reviewsJson) : [];
  }

  private setReviewsToLocalStorage(reviews: Review[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(reviews));
  }
}
