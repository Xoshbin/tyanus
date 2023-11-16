<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\Badge
 *
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property string $locale
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|Badge newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Badge newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Badge query()
 * @method static \Illuminate\Database\Eloquent\Builder|Badge whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Badge whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Badge whereLocale($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Badge whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Badge whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Badge whereUserId($value)
 */
	class Badge extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Certificate
 *
 * @property int $id
 * @property int $user_id
 * @property int $lesson_id
 * @property string $difficulty
 * @property string $name
 * @property string $locale
 * @property int $typing_speed
 * @property float $accuracy_percentage
 * @property string $completed_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection<int, \Spatie\MediaLibrary\MediaCollections\Models\Media> $media
 * @property-read int|null $media_count
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|Certificate newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Certificate newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Certificate query()
 * @method static \Illuminate\Database\Eloquent\Builder|Certificate whereAccuracyPercentage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificate whereCompletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificate whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificate whereDifficulty($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificate whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificate whereLessonId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificate whereLocale($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificate whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificate whereTypingSpeed($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificate whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificate whereUserId($value)
 */
	class Certificate extends \Eloquent implements \Spatie\MediaLibrary\HasMedia {}
}

namespace App\Models{
/**
 * App\Models\Exercise
 *
 * @property int $id
 * @property int $lesson_id
 * @property string $title
 * @property string $locale
 * @property int $target_speed
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read mixed $avg_accuracy
 * @property-read mixed $avg_speed
 * @property-read mixed $exercise_total_stars
 * @property-read mixed $is_exercise_finished
 * @property-read mixed $is_halfway_through_exercise
 * @property-read mixed $sum_time
 * @property-read mixed $total_stars_earned
 * @property-read \App\Models\Lesson $lesson
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Screen> $screens
 * @property-read int|null $screens_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\UserProgress> $userProgress
 * @property-read int|null $user_progress_count
 * @method static \Illuminate\Database\Eloquent\Builder|Exercise newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Exercise newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Exercise query()
 * @method static \Illuminate\Database\Eloquent\Builder|Exercise whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Exercise whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Exercise whereLessonId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Exercise whereLocale($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Exercise whereTargetSpeed($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Exercise whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Exercise whereUpdatedAt($value)
 */
	class Exercise extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Lesson
 *
 * @property int $id
 * @property string $title
 * @property string $locale
 * @property string $description
 * @property string $difficulty
 * @property bool $active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Exercise> $exercises
 * @property-read int|null $exercises_count
 * @method static \Illuminate\Database\Eloquent\Builder|Lesson newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Lesson newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Lesson query()
 * @method static \Illuminate\Database\Eloquent\Builder|Lesson whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lesson whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lesson whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lesson whereDifficulty($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lesson whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lesson whereLocale($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lesson whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lesson whereUpdatedAt($value)
 */
	class Lesson extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Post
 *
 * @property int $id
 * @property int $user_id
 * @property string $title
 * @property string $slug
 * @property string|null $body
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection<int, \Spatie\MediaLibrary\MediaCollections\Models\Media> $media
 * @property-read int|null $media_count
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|Post newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Post newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Post query()
 * @method static \Illuminate\Database\Eloquent\Builder|Post whereBody($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Post whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Post whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Post whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Post whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Post whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Post whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Post whereUserId($value)
 */
	class Post extends \Eloquent implements \Spatie\MediaLibrary\HasMedia {}
}

namespace App\Models{
/**
 * App\Models\Screen
 *
 * @property int $id
 * @property int $exercise_id
 * @property int $lesson_id
 * @property string $title
 * @property string $url
 * @property string $locale
 * @property string $content_type
 * @property string $content
 * @property string $extra
 * @property int $order
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Exercise $exercise
 * @property-read mixed $accuracy_percentage
 * @property-read mixed $has_star
 * @property-read mixed $is_user_tested
 * @property-read mixed $stars_earned
 * @property-read mixed $time
 * @property-read mixed $typing_speed
 * @property-read mixed $unique_screens_played
 * @property-read \App\Models\Lesson $lesson
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\UserProgress> $userProgress
 * @property-read int|null $user_progress_count
 * @method static \Illuminate\Database\Eloquent\Builder|Screen newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Screen newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Screen query()
 * @method static \Illuminate\Database\Eloquent\Builder|Screen whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Screen whereContentType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Screen whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Screen whereExerciseId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Screen whereExtra($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Screen whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Screen whereLessonId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Screen whereLocale($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Screen whereOrder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Screen whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Screen whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Screen whereUrl($value)
 */
	class Screen extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\SocialIdentity
 *
 * @property int $id
 * @property int $user_id
 * @property string|null $provider_name
 * @property string|null $provider_id
 * @property string|null $socialite_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIdentity newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIdentity newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIdentity query()
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIdentity whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIdentity whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIdentity whereProviderId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIdentity whereProviderName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIdentity whereSocialiteToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIdentity whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIdentity whereUserId($value)
 */
	class SocialIdentity extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property mixed $password
 * @property string|null $remember_token
 * @property array|null $settings
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Badge> $badges
 * @property-read int|null $badges_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Certificate> $certificates
 * @property-read int|null $certificates_count
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Post> $posts
 * @property-read int|null $posts_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\SocialIdentity> $socialIdentities
 * @property-read int|null $social_identities_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Laravel\Sanctum\PersonalAccessToken> $tokens
 * @property-read int|null $tokens_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\UserProgress> $userProgress
 * @property-read int|null $user_progress_count
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereSettings($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 */
	class User extends \Eloquent implements \Filament\Models\Contracts\FilamentUser {}
}

namespace App\Models{
/**
 * App\Models\UserProgress
 *
 * @property int $user_id
 * @property int $lesson_id
 * @property int $exercise_id
 * @property int $screen_id
 * @property string $locale
 * @property string $error_characters
 * @property int $typing_speed
 * @property float $accuracy_percentage
 * @property int $stars_earned
 * @property string|null $completed_at
 * @property string $time
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Exercise $exercise
 * @property-read \App\Models\Lesson $lesson
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|UserProgress newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserProgress newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserProgress query()
 * @method static \Illuminate\Database\Eloquent\Builder|UserProgress whereAccuracyPercentage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserProgress whereCompletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserProgress whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserProgress whereErrorCharacters($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserProgress whereExerciseId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserProgress whereLessonId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserProgress whereLocale($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserProgress whereScreenId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserProgress whereStarsEarned($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserProgress whereTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserProgress whereTypingSpeed($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserProgress whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserProgress whereUserId($value)
 */
	class UserProgress extends \Eloquent {}
}

